"use client";
import Navbar from "@/components/dashboard/requisition/Navbar";
import { useEffect, useState } from "react";
import pfp from "@/assets/images/pfp.png";
import SideNav from "@/components/dashboard/sidenav";
import { usePathname, useRouter } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    // Redirect to /dashboard/home
    if (pathname === "/dashboard") {
      router.replace("/dashboard/home");
    }
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);

    const timeoutId = setTimeout(() => {
      setIsOverlayVisible(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  };

  const toggleSidebar = () => {
    setIsOverlayVisible((prev) => !prev);
    const timeoutId = setTimeout(() => {
      setIsSidebarOpen((prev) => !prev);
    }, 50);

    return () => clearTimeout(timeoutId);
  };

  const dummyUser = {
    name: "Henry Masovid",
    isActive: true,
    img: pfp,
  };

  return (
    <div className="relative min-h-screen">
      <Navbar user={dummyUser} toggleSideNav={toggleSidebar} />

      <SideNav
        isOpen={isSidebarOpen}
        isOverlayVisible={isOverlayVisible}
        onClose={closeSidebar}
      />

      <main className="min-h-screen bg-lightblue px-0 sm:px-4">{children}</main>
    </div>
  );
};

export default Layout;
