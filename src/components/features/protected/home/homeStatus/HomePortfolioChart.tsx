"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface DataPoint {
  date: Date;
  value: number;
}

interface PortfolioChartProps {
  data?: DataPoint[];
  width?: number;
  height?: number;
}

export default function HomePortfolioChart({
  data,
  width = 350,
  height = 200,
}: PortfolioChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  // Sample data if none provided
  const defaultData: DataPoint[] = [
    { date: new Date("2024-01-01"), value: 15000 },
    { date: new Date("2024-02-01"), value: 16200 },
    { date: new Date("2024-03-01"), value: 15800 },
    { date: new Date("2024-04-01"), value: 17500 },
    { date: new Date("2024-05-01"), value: 18200 },
    { date: new Date("2024-06-01"), value: 19800 },
    { date: new Date("2024-07-01"), value: 21000 },
    { date: new Date("2024-08-01"), value: 20500 },
    { date: new Date("2024-09-01"), value: 22800 },
    { date: new Date("2024-10-01"), value: 23500 },
    { date: new Date("2024-11-01"), value: 24200 },
    { date: new Date("2024-12-01"), value: 24982 },
  ];

  const chartData = data || defaultData;

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 40, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(chartData, (d) => d.date) as [Date, Date])
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain(d3.extent(chartData, (d) => d.value) as [number, number])
      .nice()
      .range([innerHeight, 0]);

    // Line generator
    const line = d3
      .line<DataPoint>()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX);

    // Area generator
    const area = d3
      .area<DataPoint>()
      .x((d) => xScale(d.date))
      .y0(innerHeight)
      .y1((d) => yScale(d.value))
      .curve(d3.curveMonotoneX);

    // Create gradient
    const gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "portfolioGradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 0)
      .attr("y2", innerHeight);

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stopColor", "#3EDC81")
      .attr("stop-opacity", 0.3);

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stopColor", "#3EDC81")
      .attr("stop-opacity", 0.05);

    // Add area
    g.append("path")
      .datum(chartData)
      .attr("fill", "url(#portfolioGradient)")
      .attr("d", area);

    // Add line
    g.append("path")
      .datum(chartData)
      .attr("fill", "none")
      .attr("stroke", "#3EDC81")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Add dots
    g.selectAll(".dot")
      .data(chartData)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", (d) => xScale(d.date))
      .attr("cy", (d) => yScale(d.value))
      .attr("r", 3)
      .attr("fill", "#3EDC81")
      .attr("opacity", 0)
      .on("mouseover", function (event, d) {
        d3.select(this).attr("opacity", 1);

        // Tooltip
        const tooltip = g
          .append("g")
          .attr("class", "tooltip")
          .attr("transform", `translate(${xScale(d.date)},${yScale(d.value)})`);

        const rect = tooltip
          .append("rect")
          .attr("x", -40)
          .attr("y", -30)
          .attr("width", 80)
          .attr("height", 20)
          .attr("fill", "rgba(0, 0, 0, 0.8)")
          .attr("rx", 4);

        tooltip
          .append("text")
          .attr("text-anchor", "middle")
          .attr("y", -15)
          .attr("fill", "white")
          .attr("font-size", "10px")
          .text(`$${d.value.toLocaleString()}`);
      })
      .on("mouseout", function () {
        d3.select(this).attr("opacity", 0);
        g.select(".tooltip").remove();
      });

    // Add axes
    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(
        d3.axisBottom(xScale).tickFormat((d) => d3.timeFormat("%b")(d as Date))
      )
      .selectAll("text")
      .attr("fill", "currentColor")
      .attr("font-size", "10px");

    g.append("g")
      .call(d3.axisLeft(yScale).tickFormat(d3.format("$,.0f")))
      .selectAll("text")
      .attr("fill", "currentColor")
      .attr("font-size", "10px");

    // Style axes
    g.selectAll(".domain, .tick line")
      .attr("stroke", "currentColor")
      .attr("opacity", 0.2);
  }, [chartData, width, height]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="text-muted-foreground"
      />
    </div>
  );
}
