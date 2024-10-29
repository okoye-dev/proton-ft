import React, { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const SubHeader: FC<IProps> = ({ children }) => {
  return (
    <div className="bg-subheader-lightblue border-border-subheader flex w-full items-center rounded-xl border px-[10px] py-3 font-semibold">
      {children}
    </div>
  );
};

export default SubHeader;
