"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface DataPoint {
  x: number;
  y: number;
}

interface APLChartProps {
  data?: DataPoint[];
  height?: number;
}

export default function DashboardAPLChart({
  data,
  height = 56,
}: APLChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Ensure a unique gradient id per component instance to avoid collisions
  const gradientIdRef = useRef<string>(`aplGradient-${Math.random().toString(36).slice(2)}`);
  const [dimensions, setDimensions] = useState({ width: 200, height });

  // Sample data representing AI Power Level over time - upward trend
  const defaultData: DataPoint[] = [
    { x: 0, y: 60 },
    { x: 1, y: 55 },
    { x: 2, y: 60 },
    { x: 3, y: 88 },
    { x: 4, y: 80 },
    { x: 5, y: 82 },
    { x: 6, y: 84 },
    { x: 7, y: 86 },
    { x: 8, y: 72 },
    { x: 9, y: 58 },
    { x: 10, y: 65 },
    { x: 11, y: 70 },
    { x: 12, y: 75 },
    { x: 13, y: 78 },
    { x: 14, y: 82 },
    { x: 15, y: 85 },
  ];

  const chartData = data || defaultData;
  
  // Chart data is ready for rendering

  // Handle resize
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setDimensions({ width, height });
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [height]);

  useEffect(() => {
    if (!svgRef.current) return;

    const { width, height: svgHeight } = dimensions;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // No margins since we don't have axes
    const innerWidth = width;
    const innerHeight = svgHeight;

    const g = svg.append("g");

    // Scales
    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(chartData, (d) => d.x) as [number, number])
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain(d3.extent(chartData, (d) => d.y) as [number, number])
      .nice()
      .range([innerHeight, 0]);

    // Area generator
    const area = d3
      .area<DataPoint>()
      .x((d) => xScale(d.x))
      .y0(innerHeight)
      .y1((d) => yScale(d.y))
      .curve(d3.curveMonotoneX);

    // Line generator
    const line = d3
      .line<DataPoint>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y))
      .curve(d3.curveMonotoneX);

    // Create gradient for the area
    const gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", gradientIdRef.current)
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 0)
      .attr("y2", innerHeight);

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#3EDC81")
      .attr("stop-opacity", 1);

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#3EDC81")
      .attr("stop-opacity", 0.2);

    // Add area with smooth animation
    g.append("path")
      .datum(chartData)
      .style("fill", `url(#${gradientIdRef.current})`)
      .attr("d", area)
      .style("opacity", 0.2);

    // Add line with smooth animation
    g.append("path")
      .datum(chartData)
      .attr("fill", "none")
      .attr("stroke", "#3EDC81")
      .attr("stroke-width", 4)
      .attr("d", line)
      .style("opacity", 0)
      .transition()
      .duration(1000)
      .delay(200)
      .style("opacity", 1);

    // Add dot marker at the last data point
    const lastDataPoint = chartData[chartData.length - 10];
    
    // Create a white circle with green border (current point indicator)
    g.append("circle")
      .attr("cx", xScale(lastDataPoint.x))
      .attr("cy", yScale(lastDataPoint.y))
      .attr("r", 9)
      .attr("fill", "white")
      .attr("stroke", "#3EDC81")
      .attr("stroke-width", 6)
      .style("opacity", 0)
      .transition()
      .duration(800)
      .delay(600)
      .style("opacity", 1);

    // Optional: Add a subtle glow effect to the dot
    g.append("circle")
      .attr("cx", xScale(lastDataPoint.x))
      .attr("cy", yScale(lastDataPoint.y))
      .attr("r", 6)
      .attr("fill", "none")
      .attr("stroke", "#3EDC81")
      .attr("stroke-width", 1)
      .attr("opacity", 0.3)
      .style("opacity", 0)
      .transition()
      .duration(800)
      .delay(600)
      .style("opacity", 0.3);

  }, [data, chartData, dimensions]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
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