import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/types";

import React, { FC } from "react";

interface IProps {
  faqs: FAQ[];
}

const FAQColumn: FC<IProps> = ({ faqs }) => {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="flex flex-col gap-2">
        {faqs.map((faq, i) => (
          <div key={i}>
            <AccordionItem value={faq.id.toString()}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer} </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQColumn;
