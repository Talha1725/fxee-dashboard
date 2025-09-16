"use client";

import React, { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

import { useMediaQuery } from "@/hooks/use-media-query";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useLocalization } from "@/components/localization-provider";

export default function HomeScorePie({ score }: { score: number }) {
  const isMobile = useMediaQuery("(max-width: 641px)");
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();
  const { t } = useLocalization();
  
  const getColor = (score: number) => {
    if (score < 30) return "var(--color-score30)";
    if (score < 80) return "var(--color-score80)";
    return "var(--color-green)";
  };

  const scoreColor = useMemo(() => getColor(score), [score]);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous renders

    const width = isMobile ? 260 : 350;
    const height = isMobile ? 130 : 180;
    const radius = Math.min(width, height * 2) / 2;

    const pieContainer = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr(
        "transform",
        `translate(${width / 2}, ${height - (isMobile ? 10 : 20)})`
      );

    const pie = d3
      .pie<number>()
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2)
      .sort(null);

    const arc = d3
      .arc<d3.PieArcDatum<number>>()
      .innerRadius(radius * 0.6)
      .outerRadius(radius * 0.9);

    const data = [score, 100 - score];

    const arcs = pieContainer
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => {
        return i === 0 ? scoreColor : "#FFFFFF0D";
      })
      // .attr("stroke", "#ffffff")
      // .attr("stroke-width", 2)
      .style("opacity", 0)
      .transition()
      .duration(1000)
      .style("opacity", 1);

    // Add score text in the center
    pieContainer
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "-0.5em")
      .attr("class", "score-text")
      .style("font-size", isMobile ? "30px" : "43px")
      // .style("font-weight", "bold")
      .style("fill", theme === "dark" ? "#FFFFFF" : "#000000")
      .text(`${score}%`)
      .style("opacity", 0)
      .transition()
      .duration(1000)
      .delay(500)
      .style("opacity", 1);

    // Add label below the score
    pieContainer
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.2em")
      .attr("class", "score-label")
      .style("font-size", isMobile ? "16px" : "16px")
      .style("fill", theme === "dark" ? "#FFFFFF66" : "#00000066")
      .text(t("average"))
      .style("opacity", 0)
      .transition()
      .duration(1000)
      .delay(750)
      .style("opacity", 1);
  }, [score, isMobile, theme, t]);

  return (
    <div className="flex flex-col items-center justify-center font-satoshi-medium">
      <svg ref={svgRef} className="drop-shadow-sm"></svg>
    </div>
  );
}
