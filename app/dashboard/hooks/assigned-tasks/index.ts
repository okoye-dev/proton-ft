import { Task } from "@/types";
import pfp from "@/assets/images/pfp.png";
import pfpbunch from "@/assets/images/pfp-bunch.png";

export const useGetMeetingsData = () => {
  return meetingsData;
};

const meetingsData = [
  {
    name: "Soma Hansel",
    unit: "Engineering",
    timeFrame: "12:00 AM - 1:00 PM",
    date: "July 6, 2024",
  },
  {
    name: "David Deida",
    unit: "Marketing",
    timeFrame: "12:00 AM - 1:00 PM",
    date: "July 6, 2024",
  },
];

export const useGetTaskCardData = () => {
  return taskCardData;
}

const taskCardData: Task[] = [
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
    comments: [
      {
        id: 1,
        name: "Henry Masovid",
        comment:
          "Hi everyone, I just had a lengthy call with one of the technicians handling our generators and I’ve been assured that they will be ready for use by noon tomorrow.",
        time: "2 hours ago",
        img: pfp,
      },
    ],
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
    comments: [
      {
        id: 2,
        name: "Henry Masovid",
        comment:
          "Hi everyone, I just had a lengthy call with one of the technicians handling our generators and I’ve been assured that they will be ready for use by noon tomorrow.",
        time: "4 hours ago",
        img: pfp,
      },
      {
        id: 3,
        name: "Henry Masovid",
        comment: "Great work team! The engines are now fully operational.",
        time: "1 hour ago",
        img: pfp,
      },
    ],
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
    comments: [
      {
        id: 4,
        name: "Henry Masovid",
        comment:
          "Hi everyone, I just had a lengthy call with one of the technicians handling our generators and I’ve been assured that they will be ready for use by noon tomorrow.",
        time: "5 hours ago",
        img: pfp,
      },
      {
        id: 5,
        name: "Henry Masovid",
        comment:
          "There was a minor issue with the installation but it should be resolved soon.",
        time: "3 hours ago",
        img: pfp,
      },
    ],
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
    comments: [
      {
        id: 6,
        name: "Henry Masovid",
        comment:
          "Hi everyone, I just had a lengthy call with one of the technicians handling our generators and I’ve been assured that they will be ready for use by noon tomorrow.",
        time: "7 hours ago",
        img: pfp,
      },
    ],
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
    comments: [
      {
        id: 7,
        name: "Henry Masovid",
        comment:
          "Hi everyone, I just had a lengthy call with one of the technicians handling our generators and I’ve been assured that they will be ready for use by noon tomorrow.",
        time: "1 day ago",
        img: pfp,
      },
      {
        id: 8,
        name: "Henry Masovid",
        comment:
          "We might face some delays due to parts not arriving on time. I will keep everyone posted.",
        time: "8 hours ago",
        img: pfp,
      },
    ],
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
    comments: [
      {
        id: 9,
        name: "Henry Masovid",
        comment:
          "Hi everyone, I just had a lengthy call with one of the technicians handling our generators and I’ve been assured that they will be ready for use by noon tomorrow.",
        time: "3 days ago",
        img: pfp,
      },
    ],
  },
];

