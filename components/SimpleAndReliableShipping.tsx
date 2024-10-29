import Image from "next/image";
import React, { FC } from "react";
import ellipses from "@/assets/svgs/three-circles.svg";
import pfp from "@/assets/images/ceo-pfp.png";

interface IProps {}

const SimpleAndReliableShipping: FC<IProps> = (props) => {
  return (
    <div className="flex h-fit w-full flex-col gap-5 rounded-3xl bg-black/50 p-5 text-white backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Simple and Reliable Shipping</h1>
        <Image src={ellipses} alt="dots" />
      </div>
      <p>
      As an integrated data analytics and software development company, we specialize in delivering tailored solutions to industries at the forefront of global innovation, including oil and gas, shipping and logistics, marine operations, and manufacturing.
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 font-semibold">
          <Image src={pfp} alt="dots" width={25} />
          CEO ********
        </div>
        <p>Bongs</p>
      </div>
    </div>
  );
};

export default SimpleAndReliableShipping;
