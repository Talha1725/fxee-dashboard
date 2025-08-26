// "use client";

// import { Button } from "@/components/ui/button";
// import { Text12 } from "@/components/ui/typography";
// import { useUser } from "@/lib/contexts/UserContext";
// import { useTheme } from "@/lib/contexts/ThemeContext";

// export default function DashboardPlanSwitcher() {
//   const { userPlan, setUserPlan } = useUser();
//   const { theme } = useTheme();

//   return (
//     <div className="flex flex-col items-center gap-2 p-3 rounded-lg border border-white/10">
//       <Text12 className="text-black dark:text-white font-satoshi-medium">Test Plans</Text12>
//       <div className="flex gap-2">
//         <Button
//           onClick={() => setUserPlan('Basic')}
//           variant={userPlan === 'Basic' ? "fancy" : "default"}
//           className="h-8 px-2 text-xs"
//         >
//           Basic
//         </Button>
//         <Button
//           onClick={() => setUserPlan('Pro')}
//           variant={userPlan === 'Pro' ? "fancy" : "default"}
//           className="h-8 px-2 text-xs"
//         >
//           Pro
//         </Button>
//         <Button
//           onClick={() => setUserPlan('VIP')}
//           variant={userPlan === 'VIP' ? "fancy" : "default"}
//           className="h-8 px-2 text-xs"
//         >
//           VIP
//         </Button>
//       </div>
//     </div>
//   );
// }
