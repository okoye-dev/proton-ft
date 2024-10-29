import pfp from "@/assets/images/pfp.png";
import { Message } from "@/types";

export const useMockChats = () => {
  return mockMessages;
};

const mockMessages: Message[] = [
  {
    id: 1,
    isTeam: true,
    from: {
      id: 101,
      name: "John Doe",
      img: pfp,
    },
    message:
      "Please review the latest design updates. There are several changes based on the feedback we received from the client. I think the current design is much more aligned with their expectations.",
    time: "10:00 AM",
    status: "Read",
  },
  {
    id: 2,
    isTeam: false,
    from: {
      id: 102,
      name: "Jane Smith",
      img: pfp,
    },
    message:
      "Could you share the meeting notes? I missed the last meeting, and it would be great if you could summarize the key points and any action items we need to address before the next call.",
    time: "10:30 AM",
    status: "Unread",
  },
  {
    id: 3,
    isTeam: true,
    from: {
      id: 103,
      name: "Alice Brown",
      img: pfp,
    },
    message:
      "The project timeline has been updated. Please review the new deadlines.",
    time: "11:00 AM",
    status: "Read",
  },
  {
    id: 4,
    isTeam: false,
    from: {
      id: 101, // Same sender ID as John Doe
      name: "John Doe",
      img: pfp,
    },
    message:
      "What time is the client call? I think we have a few things to go over before we meet, and I’d like to have a quick sync-up before then.",
    time: "11:15 AM",
    status: "Unread",
  },
  {
    id: 5,
    isTeam: true,
    from: {
      id: 102, // Same sender ID as Jane Smith
      name: "Jane Smith",
      img: pfp,
    },
    message:
      "I've sent the files for review. Please let me know if anything needs to be adjusted. I believe everything is in order, but I'd like a second set of eyes on it before submitting it to the client.",
    time: "11:45 AM",
    status: "Read",
  },
  {
    id: 6,
    isTeam: false,
    from: {
      id: 101,
      name: "John Doe",
      img: pfp,
    },
    message:
      "Do we have the latest project updates? I want to make sure we are all on the same page before we proceed with the next phase of development.",
    time: "12:00 PM",
    status: "Unread",
  },
  {
    id: 7,
    isTeam: true,
    from: {
      id: 103,
      name: "Alice Brown",
      img: pfp,
    },
    message:
      "The new mockups look great! The team has done a fantastic job capturing the essence of what we discussed. However, I think we should explore one more iteration before finalizing.",
    time: "12:30 PM",
    status: "Read",
  },
  {
    id: 8,
    isTeam: false,
    from: {
      id: 104,
      name: "Daniel Garcia",
      img: pfp,
    },
    message:
      "Can you approve the new proposal? I’ve made the necessary adjustments based on the feedback from the last meeting. Let me know if you need any further changes.",
    time: "1:00 PM",
    status: "Unread",
  },
  {
    id: 9,
    isTeam: true,
    from: {
      id: 105,
      name: "Sophia Martinez",
      img: pfp,
    },
    message:
      "Let's schedule a meeting for tomorrow. There are a few items we need to discuss in person before finalizing the proposal for the client.",
    time: "1:30 PM",
    status: "Read",
  },
  {
    id: 10,
    isTeam: false,
    from: {
      id: 106,
      name: "James Anderson",
      img: pfp,
    },
    message:
      "Can we move the deadline to Friday? I think we need a bit more time to ensure everything is done right.",
    time: "2:00 PM",
    status: "Unread",
  },
  {
    id: 11,
    isTeam: true,
    from: {
      id: 103,
      name: "Alice Brown",
      img: pfp,
    },
    message:
      "The report has been finalized. Please go through it and provide any additional feedback by the end of the day.",
    time: "2:30 PM",
    status: "Read",
  },
  {
    id: 12,
    isTeam: false,
    from: {
      id: 104,
      name: "Daniel Garcia",
      img: pfp,
    },
    message:
      "Can you review the changes I made? I want to make sure everything is aligned with the project’s scope before proceeding.",
    time: "3:00 PM",
    status: "Unread",
  },
];
