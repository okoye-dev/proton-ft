import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface IProps {
  item: string;
  img: StaticImageData;
  to: string;
  closeNav: () => void;
}

const NavItem: FC<IProps> = ({ item, img, to, closeNav }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(to);

  return (
    <li>
      <Link
        href={to}
        onClick={closeNav}
        className={`flex gap-3 rounded-xl px-4 py-3 text-sm duration-300 ${isActive ? "bg-green-bongs" : "text-tertiary hover:bg-tertiary/10"}`}
      >
        <Image
          src={img}
          alt={item}
          width={16}
          height={16}
          className="text-green-bongs"
        />
        <p>{item}</p>
      </Link>
    </li>
  );
};

export default NavItem;
