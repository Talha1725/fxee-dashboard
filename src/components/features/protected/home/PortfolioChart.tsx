"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useAccountType } from "@/lib/contexts/AccountTypeContext";

interface DataPoint {
  month: string;
  value: number;
  x: number;
}

interface PortfolioChartProps {
  data?: DataPoint[];
  height?: number;
  highlightMonth?: string;
}

export default function PortfolioChart({
  data,
  height = 300,
  highlightMonth = "MAY"
}: PortfolioChartProps) {
  const { theme } = useTheme();
  const { isVirtualAccount } = useAccountType();
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const gradientIdRef = useRef<string>(`highlightGradient-${Math.random().toString(36).slice(2)}`);
  const areaGradientIdRef = useRef<string>(`areaGradient-${Math.random().toString(36).slice(2)}`);
  const [dimensions, setDimensions] = useState({ width: 400, height });
  const [tooltip, setTooltip] = useState<{ show: boolean; x: number; y: number; data: DataPoint | null }>({
    show: false,
    x: 0,
    y: 0,
    data: null
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Sample data with monthly progression
  const defaultData: DataPoint[] = [
    { month: "JAN", value: 15000, x: 0 },
    { month: "FEB", value: 10200, x: 1 },
    { month: "MAR", value: 23500, x: 2 },
    { month: "APR", value: 13200, x: 3 },
    { month: "MAY", value: 19800, x: 4 }, // Peak month to highlight
    { month: "JUN", value: 10982, x: 5 },
  ];

  const chartData = data || defaultData;

  // Format currency value for tooltip
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Handle resize
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setDimensions({ width, height });
    });

    resizeObserver.observe(containerRef.current);

    // Initialize dimensions immediately so height updates without a resize
    const initialWidth = containerRef.current.clientWidth || 0;
    setDimensions({ width: initialWidth, height });

    return () => resizeObserver.disconnect();
  }, [height]);

  // Also respond to height prop changes even if width doesn't change
  useEffect(() => {
    setDimensions((prev) => ({ ...prev, height }));
  }, [height]);

  // Global mouse event to hide tooltip when moving outside chart area
  useEffect(() => {
    const handleGlobalMouseMove = (event: MouseEvent) => {
      if (!containerRef.current || !tooltip.show) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const isInsideChart = (
        event.clientX >= containerRect.left &&
        event.clientX <= containerRect.right &&
        event.clientY >= containerRect.top &&
        event.clientY <= containerRect.bottom
      );
      
      if (!isInsideChart) {
        setTooltip(prev => ({ ...prev, show: false }));
      }
    };

    if (tooltip.show) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [tooltip.show]);

  useEffect(() => {
    if (!svgRef.current) return;

    const { width, height: svgHeight } = dimensions;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 0, bottom: 40, left: 0 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = svgHeight - margin.top - margin.bottom;
    const labelPadding = 8; // clamp labels inside plot area

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = d3
      .scaleLinear()
      .domain([0, chartData.length - 1])
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(chartData, d => d.value) as number])
      .nice()
      .range([innerHeight, 0]);

    // Find highlight data
    const highlightData = chartData.find(d => d.month === highlightMonth);
    const highlightIndex = chartData.findIndex(d => d.month === highlightMonth);

    // Define gradients in <defs>
    const defs = svg.append("defs");

    // Highlight bar gradient (matching the SVG pattern)
    const highlightGradient = defs
      .append("linearGradient")
      .attr("id", gradientIdRef.current)
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 0)
      .attr("y2", innerHeight);

    // Match the SVG gradient pattern
    highlightGradient
      .append("stop")
      .attr("offset", "0%") // Start transparent
      .attr("stop-color", "#3EDC81")
      .attr("stop-opacity", 0.1);

    highlightGradient
      .append("stop")
      .attr("offset", "28%") // Become solid
      .attr("stop-color", "#3EDC81")
      .attr("stop-opacity", 1);

    highlightGradient
      .append("stop")
      .attr("offset", "67%") // Stay solid with slight color change
      .attr("stop-color", "#20BE63")
      .attr("stop-opacity", 1);

    highlightGradient
      .append("stop")
      .attr("offset", "98%") // Fade back to transparent
      .attr("stop-color", "#20BE63")
      .attr("stop-opacity", 0);

    // Area fill gradient (under the line down to bottom)
    const areaGradient = defs
      .append("linearGradient")
      .attr("id", areaGradientIdRef.current)
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 0)
      .attr("y2", innerHeight);

    areaGradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#3EDC81")
      .attr("stop-opacity", 0.35);

    areaGradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#3EDC81")
      .attr("stop-opacity", 0);

    // Area generator
    const area = d3
      .area<DataPoint>()
      .x(d => xScale(d.x))
      .y0(innerHeight)
      .y1(d => yScale(d.value))
      .curve(d3.curveMonotoneX);

    // Add the area under the line (before highlight bar and line)
    const areaPath = g.append("path")
      .datum(chartData)
      .attr("fill", `url(#${areaGradientIdRef.current})`)
      .attr("d", area);
    
    if (!hasAnimated) {
      areaPath
        .style("opacity", 0)
        .transition()
        .duration(600)
        .style("opacity", 1);
    } else {
      areaPath.style("opacity", 1);
    }

    // Add highlight bar background with gradient (full height like SVG)
    if (highlightData && highlightIndex >= 0) {
      const barWidth = innerWidth / (chartData.length - 1) * 0.8;
      
      const highlightRect = g.append("rect")
        .attr("x", xScale(highlightIndex) - barWidth / 2)
        .attr("y", 0)
        .attr("width", barWidth)
        .attr("height", innerHeight)
        .attr("fill", `url(#${gradientIdRef.current})`)
        .attr("opacity", 0.5);
        
      if (!hasAnimated) {
        highlightRect
          .style("opacity", 0)
          .transition()
          .duration(800)
          .delay(400)
          .style("opacity", 0.5);
      } else {
        highlightRect.style("opacity", 0.5);
      }
    }

    // Line generator
    const line = d3
      .line<DataPoint>()
      .x(d => xScale(d.x))
      .y(d => yScale(d.value))
      .curve(d3.curveMonotoneX);

    // Add the line
    const path = g.append("path")
      .datum(chartData)
      .attr("fill", "none")
      .attr("stroke", "#3EDC81")
      .attr("stroke-width", 3)
      .attr("d", line);

    // Animate line drawing only on first load
    if (!hasAnimated) {
      const totalLength = path.node()?.getTotalLength() || 0;
      path
        .attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(1500)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);
    }

    // Add only one dot for the highlighted month
    if (highlightData && highlightIndex >= 0) {
      // Main highlighted dot
      const highlightDot = g.append("circle")
        .attr("cx", xScale(highlightIndex))
        .attr("cy", yScale(highlightData.value))
        .attr("r", 8)
        .attr("fill", "white")
        .attr("stroke", "#3EDC81")
        .attr("stroke-width", 6);
        
      if (!hasAnimated) {
        highlightDot
          .style("opacity", 0)
          .transition()
          .duration(600)
          .delay(1200)
          .style("opacity", 1);
      } else {
        highlightDot.style("opacity", 1);
      }
    }

    // Add month labels with de-dup/skip to avoid overlap and edge clamping
    const approxLabelWidthPx = 28; // 3-letter month at 12px
    const spacingPx = innerWidth / Math.max(1, (chartData.length - 1));
    const step = Math.max(1, Math.ceil(approxLabelWidthPx / spacingPx));

    const labelsData = chartData
      .map((d, i) => ({ ...d, _i: i }))
      .filter((d, _idx, arr) => d._i % step === 0 || d.month === highlightMonth || d._i === 0 || d._i === arr.length - 1);

    const monthLabels = g.selectAll(".month-label")
      .data(labelsData, (d: any) => d.month as string);

    const monthLabelsEnter = monthLabels.enter()
      .append("text")
      .attr("class", "month-label")
      .attr("x", (d: any) => {
        const rawX = xScale(d.x);
        if (d._i === 0) return Math.max(labelPadding, rawX);
        if (d._i === chartData.length - 1) return Math.min(innerWidth - labelPadding, rawX);
        return Math.min(innerWidth - labelPadding, Math.max(labelPadding, rawX));
      })
      .attr("y", innerHeight + 25)
      .attr("text-anchor", (d: any) => d._i === 0 ? "start" : (d._i === chartData.length - 1 ? "end" : "middle"))
      .attr("fill", (d: any) => d.month === highlightMonth ? theme ==="dark" ? "#fff" :"#000" : "#666")
      .attr("font-size", "12px")
      .attr("font-weight", (d: any) => d.month === highlightMonth ? "600" : "400")
      .text((d: any) => d.month)
      .style("opacity", 0);

    if (!hasAnimated) {
      monthLabelsEnter
        .transition()
        .duration(600)
        .delay(2000)
        .style("opacity", 1);
    } else {
      monthLabelsEnter.style("opacity", 1);
    }

    // Add invisible overlay rectangles for tooltip interaction
    const overlayWidth = innerWidth / chartData.length;
    
    const overlayRects = g.selectAll(".overlay-rect")
      .data(chartData)
      .enter()
      .append("rect")
      .attr("class", "overlay-rect")
      .attr("x", (d, i) => xScale(i) - overlayWidth / 2)
      .attr("y", 0)
      .attr("width", overlayWidth)
      .attr("height", innerHeight)
      .attr("fill", "transparent")
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (!containerRect) return;
        
        const mouseX = event.clientX - containerRect.left;
        const mouseY = event.clientY - containerRect.top;
        
        setTooltip({
          show: true,
          x: mouseX,
          y: mouseY,
          data: d
        });
      })
      .on("mousemove", function(event, d) {
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (!containerRect) return;
        
        const mouseX = event.clientX - containerRect.left;
        const mouseY = event.clientY - containerRect.top;
        
        setTooltip(prev => ({
          ...prev,
          x: mouseX,
          y: mouseY
        }));
      })
      .on("mouseout", function() {
        setTooltip(prev => ({
          ...prev,
          show: false
        }));
      });

    // Mark as animated after first render
    if (!hasAnimated) {
      setTimeout(() => setHasAnimated(true), 2500); // After all animations complete
    }

  }, [chartData, dimensions, highlightMonth, theme]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
      onMouseLeave={() => setTooltip(prev => ({ ...prev, show: false }))}
    >
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="overflow-visible"
      />
      
      {isVirtualAccount && (
        <div className="absolute inset-0 bg-white/30 dark:bg-[#1A1A1A]/70 backdrop-blur-[3px] rounded-lg pointer-events-none" />
      )}
      
      {tooltip.show && tooltip.data && !isVirtualAccount && (
        <div
          ref={tooltipRef}
          className={`absolute pointer-events-none z-10 px-3 py-2 text-sm rounded-lg shadow-lg border transition-opacity duration-200 ${
            theme === 'dark' 
              ? 'bg-[#1A1A1A] text-white border-gray-600' 
              : 'bg-white text-gray-900 border-gray-200'
          }`}
          style={{
            left: tooltip.x + 10,
            top: tooltip.y - 10,
            transform: tooltip.x > dimensions.width / 2 ? 'translateX(-100%)' : 'translateX(0)',
          }}
        >
          <div className="font-semibold">{tooltip.data.month}</div>
          <div className="text-green-500 font-medium">{formatCurrency(tooltip.data.value)}</div>
        </div>
      )}
    </div>
  );
}