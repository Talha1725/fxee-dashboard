import React from "react";

import ProtectedContentContainer from "../ProtectedContentContainer";
import PerformanceSettingSelect from "../performance/setting/PerformanceSettingSelect";
import TradesAccount from "./TradesAccount";

export default function Trades() {
  return (
    <ProtectedContentContainer className="sm:gap-10">
      <div className="flex flex-col items-end gap-5 self-stretch">
        <div className="w-fit">
          <PerformanceSettingSelect />
        </div>
      </div>
      <TradesAccount />
    </ProtectedContentContainer>
  );
}
