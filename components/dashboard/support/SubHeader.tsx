import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { Dispatch, FC, SetStateAction } from "react";
import faqs from "@/assets/svgs/faqs.svg";
import faqsInactive from "@/assets/svgs/faqs-inactive.svg";
import support from "@/assets/svgs/support.svg";
import supportInactive from "@/assets/svgs/support-inactive.svg";
import { cn } from "@/lib/utils";

interface IProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const SupportSubHeader: FC<IProps> = ({ activeTab, setActiveTab }) => {
  const isFaqs = activeTab === "faqs";
  const isSupport = activeTab === "support";
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-border-subheader bg-white p-3 text-sm text-secondary">
      <p>
        {isFaqs
          ? "Detailed answers to all of our frequently asked questions."
          : "Get instant help with from the support team, chat with colleagues."}
      </p>

      <div className="flex gap-3">
        <Button
          className={cn("flex w-12 gap-2 p-0 duration-300 sm:w-28")}
          variant={isFaqs ? "default" : "white"}
          onClick={() => setActiveTab("faqs")}
        >
          <Image
            src={isFaqs ? faqs : faqsInactive}
            alt="go"
            width={20}
            height={20}
          />
          <span className="hidden sm:flex"> FAQs</span>
        </Button>
        <Button
          className={cn("flex w-12 gap-2 p-0 duration-300 sm:w-32")}
          variant={isSupport ? "default" : "white"}
          onClick={() => setActiveTab("support")}
        >
          <Image
            src={isFaqs ? support : supportInactive}
            alt="go"
            width={20}
            height={20}
          />
          <span className="hidden sm:flex">Support</span>
        </Button>
      </div>
    </div>
  );
};

export default SupportSubHeader;
