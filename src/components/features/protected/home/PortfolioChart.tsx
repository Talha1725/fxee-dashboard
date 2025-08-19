"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

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
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientIdRef = useRef<string>(`highlightGradient-${Math.random().toString(36).slice(2)}`);
  const areaGradientIdRef = useRef<string>(`areaGradient-${Math.random().toString(36).slice(2)}`);
  const [dimensions, setDimensions] = useState({ width: 400, height });

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
    g.append("path")
      .datum(chartData)
      .attr("fill", `url(#${areaGradientIdRef.current})`)
      .attr("d", area)
      .style("opacity", 0)
      .transition()
      .duration(600)
      .style("opacity", 1);

    // Add highlight bar background with gradient (full height like SVG)
    if (highlightData && highlightIndex >= 0) {
      const barWidth = innerWidth / (chartData.length - 1) * 0.8;
      
      g.append("rect")
        .attr("x", xScale(highlightIndex) - barWidth / 2)
        .attr("y", 0)
        .attr("width", barWidth)
        .attr("height", innerHeight)
        .attr("fill", `url(#${gradientIdRef.current})`)
        .attr("opacity", 0.5)
        .style("opacity", 0)
        .transition()
        .duration(800)
        .delay(400)
        .style("opacity", 0.5);
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

    // Animate line drawing
    const totalLength = path.node()?.getTotalLength() || 0;
    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(1500)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0);

    // Add only one dot for the highlighted month
    if (highlightData && highlightIndex >= 0) {
      // Main highlighted dot
      g.append("circle")
        .attr("cx", xScale(highlightIndex))
        .attr("cy", yScale(highlightData.value))
        .attr("r", 8)
        .attr("fill", "white")
        .attr("stroke", "#3EDC81")
        .attr("stroke-width", 6)
        .style("opacity", 0)
        .transition()
        .duration(600)
        .delay(1200)
        .style("opacity", 1);
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
      .attr("fill", (d: any) => d.month === highlightMonth ? "#fff" : "#666")
      .attr("font-size", "12px")
      .attr("font-weight", (d: any) => d.month === highlightMonth ? "600" : "400")
      .text((d: any) => d.month)
      .style("opacity", 0);

    monthLabelsEnter
      .transition()
      .duration(600)
      .delay(2000)
      .style("opacity", 1);

  }, [chartData, dimensions, highlightMonth]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
    >
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="overflow-visible"
      />
    </div>
  );
}