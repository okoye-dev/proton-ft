import Image from "next/image";
import { FC } from "react";
import approved from "@/assets/svgs/approved.svg";
import declined from "@/assets/svgs/declined.svg";
import pending from "@/assets/svgs/pending.svg";

interface IProps {
  status: "Approved" | "Pending" | "Declined";
}

const Status: FC<IProps> = ({ status }) => {
  return (
    <>
      {status === "Approved" ? (
        <Image src={approved} alt="approved" />
      ) : status === "Declined" ? (
        <Image src={declined} alt="declined" />
      ) : (
        <Image src={pending} alt="pending" />
      )}
    </>
  );
};

export default Status;
