import { useGetMyAnalysesQuery } from '@/lib/redux/features/recommendations/recommendationsApi';

export function useAIConfidence() {
  const { data: analysesData, isLoading, isFetching } = useGetMyAnalysesQuery({ 
    limit: 1
  });

  const latestAnalysis = analysesData?.success && analysesData.data 
    ? (Array.isArray(analysesData.data) ? analysesData.data[0] : analysesData.data)
    : null;

  return {
    confidence: latestAnalysis?.confidence || 0,
    isUpdating: isLoading || isFetching,
    lastUpdated: latestAnalysis?.createdAt ? new Date(latestAnalysis.createdAt) : new Date()
  };
}