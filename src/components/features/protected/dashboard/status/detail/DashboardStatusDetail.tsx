import React from "react";

import DashboardStatusDetailPT from "./DashboardStatusDetailPT";
import DashboardStatusDetailTA from "./DashboardStatusDetailTA";
import DashboardStatusDetailAI from "./DashboardStatusDetailAI";

export default function DashboardStatusDetail() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 self-stretch">
      <DashboardStatusDetailPT />
      <DashboardStatusDetailTA />
      <DashboardStatusDetailAI />
    </div>
  );
}
