"use client";

import { useState, useCallback, useEffect } from "react";
import DashboardHeadBadge from "@/components/features/protected/dashboard/DashboardHeadBadge";
import DashboardAPLSlider from "@/components/features/protected/dashboard/ACP/DashboardAPLSlider";
import DashboardAPLChart from "@/components/features/protected/dashboard/ACP/DashboardAPLChart";
import { IconPowerService } from "@/components/ui/icon";
import { Text16 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

interface DataPoint {
  x: number;
  y: number;
}

// Generate random chart data with spikes based on slider value
const generateRandomData = (sliderValue: number): DataPoint[] => {
  const dataLength = 16;
  const data: DataPoint[] = [];
  
  // Create more dramatic spikes and variations
  for (let i = 0; i < dataLength; i++) {
    let value;
    
    // Create random spikes (30% chance of a significant spike)
    if (Math.random() < 0.3) {
      // Big spike up or down
      const spikeDirection = Math.random() < 0.5 ? 1 : -1;
      const spikeSize = Math.random() * 40 + 20; // 20-60 point spike
      value = sliderValue + (spikeDirection * spikeSize);
    } else {
      // Normal variation around slider value
      const variance = Math.random() * 40 - 20; // Random variance between -20 and +20
      value = sliderValue + variance;
    }
    
    // Keep within bounds
    value = Math.max(5, Math.min(95, value));
    data.push({ x: i, y: value });
  }
  
  // Force more dramatic changes by adding timestamp to ensure uniqueness
  return data;
};

// Static default data for server-side rendering (no Math.random)
const getStaticDefaultData = (): DataPoint[] => [
  { x: 0, y: 33 },
  { x: 1, y: 35 },
  { x: 2, y: 30 },
  { x: 3, y: 38 },
  { x: 4, y: 32 },
  { x: 5, y: 36 },
  { x: 6, y: 34 },
  { x: 7, y: 37 },
  { x: 8, y: 31 },
  { x: 9, y: 35 },
  { x: 10, y: 33 },
  { x: 11, y: 36 },
  { x: 12, y: 34 },
  { x: 13, y: 38 },
  { x: 14, y: 32 },
  { x: 15, y: 35 },
];

interface DashboardAPLProps {
  onPowerLevelChange?: (value: number) => void;
  value?: number;
}

export default function DashboardAPL({ onPowerLevelChange, value = 33 }: DashboardAPLProps) {
  const { theme } = useTheme();
  const [sliderValue, setSliderValue] = useState<number>(value);
  const [chartData, setChartData] = useState<DataPoint[]>(getStaticDefaultData);
  const [isClient, setIsClient] = useState(false);

  // Update slider value when prop changes (from API)
  useEffect(() => {
    if (sliderValue !== value) {
      setSliderValue(value);
      if (isClient) {
        setChartData(generateRandomData(value));
      }
    }
  }, [value, isClient, sliderValue]);

  // Ensure we're on the client side to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
    // Generate initial random data only on client
    setChartData(generateRandomData(value));
  }, []); // Remove dependencies to avoid infinite loop

  // Handle slider value change and generate new random chart data
  const handleSliderChange = useCallback((newValue: number) => {
    if (!isClient || newValue === sliderValue) return; // Only update if different and on client side
    
    setSliderValue(newValue);
    // Generate completely new random data every time
    const newData = generateRandomData(newValue);
    setChartData([...newData]); // Force new array reference
    // Notify parent component of the change
    onPowerLevelChange?.(newValue);
  }, [isClient, onPowerLevelChange, sliderValue]);
  return (
    <div className={`flex flex-col sm:flex-row justify-between items-center gap-2.5 overflow-hidden self-stretch rounded-[10px] border border-white/2 ${theme === "dark" ? "bg-dark-gradient" : "bg-black/5"} `}>
      <div className="flex flex-col items-start gap-2.5 shrink-0 self-stretch py-3.5 px-3 flex-[1_0_0]">
        <div className="flex items-center gap-2 self-stretch">
          <DashboardHeadBadge>
            <IconPowerService width={14} height={14} />
          </DashboardHeadBadge>
          <div className="flex items-center gap-2">
            <Text16 className="font-satoshi-medium">AI Power Level</Text16>
            <span className="text-xs text-green-400 font-mono">({sliderValue}%)</span>
          </div>
        </div>
        <DashboardAPLSlider value={sliderValue} onValueChange={handleSliderChange} />
      </div>
      <div className="self-stretch flex-[1_0_0] h-full sm:w-[50%] xl:w-full">
        <DashboardAPLChart data={chartData} height={83} />
      </div>
    </div>
  );
}