import Image from "next/image";
import React, { FC } from "react";
import green from "@/assets/svgs/circle-green.svg";
import gray from "@/assets/svgs/circle-gray.svg";

interface IProps {
  formStage: number;
}

const ProgressIndicator: FC<IProps> = ({ formStage = 0 }) => {
  return (
    <ul className="flex gap-2 pb-8  pt-2">
      <li>
        <Image src={green} alt="green" width={10} height={10} />
      </li>
      <li>
        <Image src={gray} alt="gray" width={10} height={10} />
      </li>
      <li>
        <Image src={gray} alt="gray" width={10} height={10} />
      </li>
    </ul>
  );
};

export default ProgressIndicator;
