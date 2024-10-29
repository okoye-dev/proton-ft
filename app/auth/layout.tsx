import Image from "next/image";
import React, { FC } from "react";
import boat from "@/assets/images/boat.png";
import bg from "@/assets/images/bg.png";
import SimpleAndReliableShipping from "@/components/SimpleAndReliableShipping";

interface IProps {
  children: React.ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen gap-2 overflow-hidden p-2">
      <Image
        src={bg}
        alt="bg"
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover opacity-15"
      />

      <section className="relative hidden w-[55%] min-w-[600px] items-end justify-end overflow-hidden rounded-3xl bg-blue-950/10 lg:flex">
        <Image
          priority
          src={boat}
          alt="bg"
          className="absolute h-full w-full object-cover"
        />
        <div className="relative w-full p-2">
          <SimpleAndReliableShipping />
        </div>
      </section>
      <section className="flex w-full items-center justify-center lg:w-[45%]">
        {children}
      </section>
    </div>
  );
};

export default Layout;
