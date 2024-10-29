import React, { FC } from "react";
import FAQColumn from "./FAQColumn";
import { useMockFAQs } from "@/app/dashboard/hooks/support/useMockFAQs";

interface IProps {}

const FAQs: FC<IProps> = (props) => {
  // Mock data
  const faqs = useMockFAQs();
  const faqsCol1 = faqs.slice(0, 3);
  const faqsCol2 = faqs.slice(3, 6);
  const faqsCol3 = faqs.slice(6, 9);

  return (
    <div className="flex flex-col rounded-3xl border border-border-subheader gap-2 bg-white p-4 md:flex-row">
      <FAQColumn faqs={faqsCol1} />
      <FAQColumn faqs={faqsCol2} />
      <FAQColumn faqs={faqsCol3} />
    </div>
  );
};

export default FAQs;
