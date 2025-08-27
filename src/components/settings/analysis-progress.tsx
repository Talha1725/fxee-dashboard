export default function AnalysisProgress({progress}: {progress: number}) {
  return (
    <div className="w-full my-1">
      <div className="w-full h-[6px] bg-white/70 rounded-full">
        <div 
          className="h-full bg-gradient-to-b from-[#0276DB] to-[#15B0F8] rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}