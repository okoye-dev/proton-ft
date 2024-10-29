"use client";
import { useRef, useEffect, FC } from "react";
import NavItem from "./NavItem";
import { useGetSideNavItems } from "@/app/dashboard/hooks/useGetSideNavItems";
import settings from "@/assets/svgs/nav-items/settings.svg";
import logout from "@/assets/svgs/nav-items/log-out.svg";
import logo from "@/assets/images/westfield-logo.jpg";
import Image from "next/image";

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
  isOverlayVisible: boolean;
}

const SideNav: FC<SideNavProps> = ({ isOpen, onClose, isOverlayVisible }) => {
  const navItems = useGetSideNavItems();

  const sidebarRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`sidebar-content fixed left-0 top-0 z-40 h-full w-72 flex-col justify-between overflow-y-scroll bg-white text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav>
          <ul className="flex flex-col gap-3 px-4 py-6">
            {navItems.map((item) => (
              <NavItem
                key={item.name}
                item={item.name}
                img={item.img}
                to={item.to}
                closeNav={onClose}
              />
            ))}
          </ul>
        </nav>
        <nav>
          <ul className="flex flex-col px-4 py-6">
            <NavItem
              key={Math.random()}
              item={"Settings"}
              img={settings}
              to={"/dashboard/settings"}
              closeNav={onClose}
            />{" "}
            <NavItem
              key={Math.random()}
              item={"Log Out"}
              img={logout}
              to={"/dashboard/logout"}
              closeNav={onClose}
            />
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="mt-4 w-20 px-3"
            />
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      <div
        id="sidenav-overlay"
        className={`${isOpen ? "z-30 opacity-50" : "opacity-0"} ${isOverlayVisible ? "" : "hidden"} fixed inset-0 z-30 bg-black duration-300`}
        onClick={onClose}
      ></div>
    </>
  );
};

export default SideNav;
