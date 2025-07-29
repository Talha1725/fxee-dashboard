import DashboardACPHead from "@/components/features/protected/dashboard/ACP/DashboardACPHead";
import DashboardAPL from "@/components/features/protected/dashboard/ACP/DashboardAPL";
import DashboardActiveAddons from "./DashboardActiveAddons";
import DashboardACPDetail from "./DashboardACPDetail";

export default function DashboardACP() {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch p-5 bg-popover-gradient rounded-[16px] border border-white/5">
      <DashboardACPHead />
      <DashboardAPL />
      <DashboardActiveAddons />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 self-stretch">
        <DashboardACPDetail
          title="Processing Power"
          value="12.4 TFLOPS"
          description="Neutral Processing"
        />
        <DashboardACPDetail
          title="Response Time"
          value="124ms"
          description="Average Latency"
          isGreen={true}
        />
        <DashboardACPDetail
          title="Accuracy Rate"
          value="90.60%"
          description="Last 100 signals"
        />
      </div>
    </div>
  );
}
