import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type NavItemType = {
  name: string;
  img: StaticImageData;
  to: string;
};

export type StaffRequisitionData = {
  id: number;
  requestedBy: string;
  requestorEmail: string;
  unit: string;
  location: string;
  jobTitle: string;
  employmentType: string;
  proposedStartDate: string;
  position: string;
  reasonForRequest: string;
  jobDescription: string;
  status: "Approved" | "Pending" | "Declined";
  created: string;
};

export type ActivityReportData = {
  name?: string;
  img: StaticImageData;
  tasksCompleted?: number;
  date?: string;
  overallTime?: number;
  totalTimeWorked?: string;
  timeActiveInPercentage?: number;
  timeAbsentInPercentage?: number;
};

export type UpcomingEventsData = {
  eventTitle: string;
  time: string;
  date: string;
};

export type ProjectsTableData = {
  id: number;
  title: string;
  description: string;
  unit: string;
  taskPeriod?: string;
  progressValue: number;
  members: StaticImageData;
  status: "Not Started" | "Completed" | "In Progress";
};

export type TitleAndDescriptionData = {
  title: string;
  description: string;
  unit: string;
};

export type ProjectsTableModifiedData = {
  id: number;
  titleAndDescription: TitleAndDescriptionData;
  taskPeriod: string;
  progressValue: number;
  members: StaticImageData;
  status: "Not Started" | "Completed" | "In Progress";
};

export type CommentType = {
  id: number;
  name: string;
  comment: string;
  time: string;
  img: StaticImageData;
};

export interface Task extends ProjectsTableData {
  noOfMembers?: number;
  comments?: CommentType[];
}

export type Actions = {
  canDownload: boolean;
  canDelete: boolean;
};

export type DocumentsRowData = {
  id: number;
  filename: string;
  fileSize: number;
  dateUploaded: string;
  lastUpdated: string;
  uploadedBy: string;
  actions: Actions;
};

export type TeamMemberRowData = {
  id: number;
  name: string;
  email: string;
  location: string;
  startDate: string;
  jobTitle: string;
  phoneNumber: string;
  status: "Active" | "On Leave" | "Offline";
};

export type MemberInfo = {
  name: string;
  email: string;
  img: StaticImageData;
};

export type TeamMemberModifiedRowData = {
  id: number;
  info: MemberInfo;
  location: string;
  startDate: string;
  jobTitle: string;
  phoneNumber: string;
  status: "Active" | "On Leave" | "Offline";
};

export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export type Message = {
  id: number;
  isTeam: boolean;
  to?: {
    id: number;
    name: string;
    img: StaticImageData;
  };
  from: {
    id: number;
    name: string;
    img: StaticImageData;
  };
  message: string;
  time: string;
  status: "Unread" | "Read";
};

export type ChatPreview = {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  img: StaticImageData;
};

export type DispatchState<T> = (param: T) => {
  type: string;
  payload: T;
};
