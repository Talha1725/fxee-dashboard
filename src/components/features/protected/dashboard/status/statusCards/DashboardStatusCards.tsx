import React from "react";

import DashboardStatusCardTE from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardTE";
import DashboardStatusCardPT from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardPT";
import DashboardStatusCardWP from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardWP";
import DashboardStatusCardMV from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardMV";
import {useGetLastProposedTradeQuery} from "@/lib/redux/features/proposed-trades/proposedTradesApi";

export default function DashboardStatusCards() {
    const {data: lastTradeData} = useGetLastProposedTradeQuery();
    const proposedTrade = lastTradeData?.data;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 self-stretch">
            <DashboardStatusCardTE proposedTrade={proposedTrade}/>
            <DashboardStatusCardPT proposedTrade={proposedTrade}/>
            <DashboardStatusCardWP proposedTrade={proposedTrade}/>
            <DashboardStatusCardMV proposedTrade={proposedTrade}/>
        </div>
    );
}