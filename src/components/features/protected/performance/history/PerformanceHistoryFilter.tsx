import React from "react";

import { Button } from "@/components/ui/button";
import { IconFilter, IconSearch } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PerformanceHistoryFilter() {
  return (
    <div className="flex items-start gap-1 self-stretch">
      <div className="flex flex-col md:flex-row gap-2.5 md:gap-0 justify-between items-center flex-[1_0_0]">
        <TabsList className="self-stretch w-full md:w-fit">
          <TabsTrigger value="all" className="w-full md:w-25">
            All
          </TabsTrigger>
          <TabsTrigger value="open" className="w-full md:w-25">
            Open
          </TabsTrigger>
          <TabsTrigger value="closed" className="w-full md:w-25">
            Closed
          </TabsTrigger>
        </TabsList>
        <div className="flex justify-end items-center gap-3 flex-[1_0_0] self-stretch">
          <Input
            placeholder="Search..."
            className="px-3 py-1 gap-1 border-none w-full md:w-[260px] self-stretch dark:bg-gradient-to-b dark:from-[#ffffff08] dark:to-[#FFFFFF05] bg-gradient-to-b from-[#00000010] to-[#00000008]"
            icon={<IconSearch height={20} width={20} />}
          />
          <Button className="border-none dark:bg-gradient-to-b dark:from-[#ffffff23] dark:to-[#FFFFFF18] bg-gradient-to-b from-[#00000010] to-[#00000008]">
            <IconFilter width={20} height={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
