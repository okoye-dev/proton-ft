import useMockTeamMemberData from "./useMockTeamMemberData";
import { TeamMemberModifiedRowData } from "@/types";
import pfp from "@/assets/images/pfp.png";

const useParseTeamMemberData = (isTop: boolean) => {
  const teamMembers = useMockTeamMemberData();

  const convertedData: TeamMemberModifiedRowData[] = teamMembers.map(
    (member) => ({
      id: member.id,
      info: {
        name: member.name,
        email: member.email,
        img: pfp,
      },
      location: member.location,
      startDate: member.startDate,
      jobTitle: member.jobTitle,
      phoneNumber: member.phoneNumber,
      status: member.status,
    }),
  );

  const n = 3;
  return isTop ? convertedData.slice(0, n) : convertedData;
};

export default useParseTeamMemberData;
