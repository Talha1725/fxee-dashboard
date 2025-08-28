"use client";
import React, { useEffect } from "react";

import ProtectedContentContainer from "../ProtectedContentContainer";
import AIEngineStatus from "./status/AIEngineStatus";
import AIEngineTools from "./tools/AIEngineTools";
import { AnalysisProvider, useAnalysis } from "@/lib/contexts/AnalysisContext";
import { useGetMyAnalysesQuery } from "@/lib/redux/features/recommendations/recommendationsApi";

function AIEngineContent() {
  const { setAnalysisData } = useAnalysis();
  
  // Auto-load the latest analysis when component mounts
  const { data: analysesData, isSuccess } = useGetMyAnalysesQuery({ 
    limit: 1 // Get only the most recent analysis
  });

  useEffect(() => {
    if (isSuccess && analysesData?.success && analysesData.data) {
      // Handle both array format (my-analyses) and single object format (latest analysis)
      const latestAnalysis = Array.isArray(analysesData.data) 
        ? analysesData.data[0] 
        : analysesData.data;
      
      if (latestAnalysis) {
        setAnalysisData(latestAnalysis);
      }
    }
  }, [isSuccess, analysesData, setAnalysisData]);

  return (
    <ProtectedContentContainer className="sm:gap-10">
      <AIEngineStatus />
      <AIEngineTools />
    </ProtectedContentContainer>
  );
}

export default function AIEngine() {
  return (
    <AnalysisProvider>
      <AIEngineContent />
    </AnalysisProvider>
  );
}
