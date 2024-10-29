import React, { FC } from "react";
import header from "@/assets/images/header-bg.jpeg";
import Image from "next/image";
interface IProps {
  children: React.ReactNode;
}

const Header: FC<IProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden rounded-[10px] p-5 text-xl font-semibold text-white">
      <Image
        src={header}
        alt="bg"
        className="absolute -top-1/2 left-0 z-10 w-full"
        width={500}
        height={500}
      />
      <div className="relative z-20"> {children}</div>
    </div>
  );
};

export default Header;
