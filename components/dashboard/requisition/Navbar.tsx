import { FC, ReactNode } from "react";
import active from "@/assets/svgs/active.svg";
import notepad from "@/assets/svgs/notepad.svg";
import menu from "@/assets/svgs/menu.svg";
import profilePic from "@/assets/images/pfp.png";
import Image, { StaticImageData } from "next/image";
import SearchBar from "./SearchBar";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  user?: {
    name: string;
    isActive: boolean;
    img: StaticImageData;
  };
  toggleSideNav: () => void;
}

const Navbar: FC<NavbarProps> = ({ user, toggleSideNav }) => {
  return (
    <nav className="flex items-center justify-between gap-4 border-b p-5">
      <div className="bg-gray flex w-4/5 items-center rounded-[10px] md:w-3/5">
        <Button
          variant={"ghost"}
          onClick={toggleSideNav}
          className="flex h-10 w-10 -translate-x-2 items-center justify-center px-3 py-2"
        >
          <Image src={menu} alt="profile pic" width={16} height={16} />
        </Button>
        <SearchBar />
      </div>
      <div className="flex w-2/5 items-center justify-end gap-5">
        {user?.isActive && (
          <div className="flex gap-1">
            <Image
              src={active}
              alt="active"
              width={16}
              height={16}
              className="w-full"
            />
            <span className="hidden lg:flex">Active</span>
          </div>
        )}
        <Image src={notepad} alt="notepad" />
        <div className="hidden md:flex">{user?.name}</div>
        <Image src={profilePic} alt="profile pic" width={50} height={50} />
      </div>
    </nav>
  );
};

export default Navbar;
