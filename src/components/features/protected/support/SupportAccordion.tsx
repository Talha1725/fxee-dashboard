import React from "react";

import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Text14, Text18 } from "@/components/ui/typography";
import { FAQS } from "@/lib/constants";

export default function SupportAccordion({ activeTab }: { activeTab: number }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex flex-col gap-2 self-stretch flex-[1_0_0]"
      defaultValue={`item-${activeTab}`}
    >
      {FAQS[activeTab].faq.map((faq, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger>
            <Text18>{faq.question}</Text18>
          </AccordionTrigger>
          <AccordionContent>
            <Text14>{faq.answer}</Text14>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
