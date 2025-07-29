import React from "react";

import TradesStatusOT from "./TradesStatusOT";
import TradesStatusUP from "./TradesStatusUP";
import TradesStatusRE from "./TradesStatusRE";

export default function TradesStatus() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 self-stretch">
      <TradesStatusOT />
      <TradesStatusUP />
      <TradesStatusRE />
    </div>
  );
}
