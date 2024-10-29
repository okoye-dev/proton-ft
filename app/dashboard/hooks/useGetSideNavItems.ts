import { NavItemType } from "@/types";
import home from "@/assets/svgs/nav-items/home.svg";
import assignedTasks from "@/assets/svgs/nav-items/assigned-tasks.svg";
import documents from "@/assets/svgs/nav-items/documents.svg";
import trainingModules from "@/assets/svgs/nav-items/training-modules.svg";
import meetTheTeam from "@/assets/svgs/nav-items/meet-the-team.svg";
import report from "@/assets/svgs/nav-items/report.svg";
import support from "@/assets/svgs/nav-items/support.svg";

export const useGetSideNavItems = () => navItems;

const navItems: NavItemType[] = [
  {
    name: "Home",
    img: home,
    to: "/dashboard/home",
  },
  {
    name: "Staff Requisition",
    img: meetTheTeam,
    to: "/dashboard/staff-requisition",
  },
  {
    name: "Assigned Tasks",
    img: assignedTasks,
    to: "/dashboard/assigned-tasks",
  },
  {
    name: "Documents",
    img: documents,
    to: "/dashboard/documents",
  },
  {
    name: "Training Modules",
    img: trainingModules,
    to: "/dashboard/training-modules",
  },
  {
    name: "Meet the Team",
    img: meetTheTeam,
    to: "/dashboard/meet-the-team",
  },
  {
    name: "Report",
    img: report,
    to: "/dashboard/report",
  },
  {
    name: "Support",
    img: support,
    to: "/dashboard/support",
  },
];
