import pfp from "@/assets/images/pfp.png";
import pfpbunch from "@/assets/images/pfp-bunch.png";
import { ProjectsTableData, ProjectsTableModifiedData } from "@/types";

export const useGetActivityReportData = () => {
  return {
    name: "Henry Masovid",
    img: pfp,
    tasksCompleted: 24,
    date: "10th, Sept 2024",
    overallTime: 400,
    totalTimeWorked: "46 hr 40 min",
    timeActiveInPercentage: 40,
    timeAbsentInPercentage: 20,
  };
};

export const useGetUpcomingEventsData = () => upComingEvents;

const upComingEvents = [
  {
    eventTitle: "Company Annual Anniversary",
    time: "9am - 3pm",
    date: "July 27, 2024",
  },
  {
    eventTitle: "Company Mid-Year Carnival",
    time: "9am - 5pm",
    date: "April 3, 2024",
  },
  {
    eventTitle: "New CEO Indictment",
    time: "9am - 12pm",
    date: "December 15, 2024",
  },
];

export const useGetProjectsTableData = () => projects;

const projects: ProjectsTableData[] = [
  {
    id: 1,
    title: "Faulty Engines",
    description:
      "Repair for faulty engines in the main office building lorem ipsum dolor ist emeret",
    unit: "Engineering",
    taskPeriod: "Jul 10 - Jul 12",
    progressValue: 0,
    members: pfpbunch,
    status: "Not Started",
  },
  {
    id: 2,
    title: "Faulty Engines",
    description:
      "Fixx engines lorem ipsum dolor ist emeret lorem ipsum dolor ist emeret",
    unit: "Design",
    taskPeriod: "Jul 10 - Jul 12",
    progressValue: 100,
    members: pfpbunch,
    status: "Completed",
  },
  {
    id: 3,
    title: "Faulty Engines",
    description:
      "Repair for faulty engines in the main office building lorem ipsum dolor ist emeret",
    unit: "Marketing",
    taskPeriod: "Jul 10 - Jul 12",
    progressValue: 70,
    members: pfpbunch,
    status: "In Progress",
  },
  {
    id: 4,
    title: "Faulty Engines",
    description:
      "Repair for faulty engines in the main office building lorem ipsum dolor ist emeret engines shalll dorle office building lorem ipsum dolor ist emeret estabion",
    unit: "Marketing",
    taskPeriod: "Jul 10 - Jul 12",
    progressValue: 23,
    members: pfpbunch,
    status: "In Progress",
  },
  {
    id: 5,
    title: "Faulty Engines",
    description:
      "Repair for faulty engines in the main office building lorem ipsum dolor ist emeret",
    unit: "Marketing",
    taskPeriod: "Jul 10 - Jul 12",
    progressValue: 0,
    members: pfpbunch,
    status: "Not Started",
  },
  {
    id: 6,
    title: "Faulty Engines",
    description:
      "Repair for faulty engines in the main office building lorem ipsum dolor ist emeret",
    unit: "Marketing",
    taskPeriod: "Jul 10 - Jul 12",
    progressValue: 0,
    members: pfpbunch,
    status: "Not Started",
  },
];

export const useParseProjectTableData = (
  data: ProjectsTableData[],
): ProjectsTableModifiedData[] => {
  return data.map((project) => ({
    id: project.id,
    taskPeriod: project.taskPeriod ?? "",
    progressValue: project.progressValue,
    members: project.members,
    status: project.status,
    titleAndDescription: {
      title: project.title,
      description: project.description,
      unit: project.unit,
    },
  }));
};
