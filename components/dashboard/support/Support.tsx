"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { FC, useState, useEffect } from "react";
import faqs from "@/assets/svgs/faqs.svg";
import SearchBar from "../requisition/SearchBar";
import FilterCard from "./FilterCard";
import ChatPreviewList from "./ChatPreviewList";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Provider } from "react-redux";
import store from "@/app/_state/store";
import ChatBox from "./ChatBox";
import { cn } from "@/lib/utils";

interface IProps {}

const Support: FC<IProps> = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Handle screen size change for mobile view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
        setIsMobileView(true);
      } else {
        setIsCollapsed(false);
        setIsMobileView(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle the collapsible state
  const toggleCollapse = (shouldWait: boolean = false) => {
    if (window.innerWidth < 768) {
      if (shouldWait) {
        setTimeout(() => {
          setIsCollapsed((prevState) => !prevState);
        }, 300);
      } else setIsCollapsed((prevState) => !prevState);
    }
  };

  return (
    <Provider store={store}>
      <div className="relative flex gap-1 overflow-hidden text-primary md:gap-2 lg:gap-4">
        {/* Chat Preview and Filter */}
        <section
          className={cn(
            "flex flex-col gap-4 rounded-2xl border border-border-subheader bg-white p-4 transition-all duration-300",
            isCollapsed ? "h-8 w-2 rounded-2xl p-6" : "w-full",
            !isMobileView && "w-[45%] lg:w-1/3",
          )}
        >
          {isCollapsed ? (
            <div
              className="absolute left-0 top-0 flex h-[50px] w-[50px] items-center justify-center rounded-2xl duration-300 hover:bg-green-bright/20"
              onClick={() => toggleCollapse()}
            >
              <ChevronRight size={24} className="text-primary" />
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between gap-3">
                <strong className="text-lg">Conversations</strong>
                <Button className="flex h-8 w-24 gap-1 rounded-full text-xs">
                  Support <Image src={faqs} alt="go" width={20} height={20} />
                </Button>
              </div>
              <SearchBar />
              <FilterCard
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
              <ChatPreviewList toggleCollapse={toggleCollapse} />
            </>
          )}
        </section>

        {/* Chat box */}
        <ChatBox />
      </div>
    </Provider>
  );
};

export default Support;
