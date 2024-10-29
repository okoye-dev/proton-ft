import Header from "@/components/dashboard/Header";
import CreateStaffRequisitionForm from "@/components/dashboard/staff-requisition/CreateStaffRequisitionForm";
import { FC } from "react";

interface IProps {}

const CreateStaffRequisition: FC<IProps> = () => {
  return (
    <div className="flex flex-col gap-5 p-5">
      <Header>Create Staff Requisition</Header>
      <section className="flex w-full justify-center py-10">
        <CreateStaffRequisitionForm />
      </section>
    </div>
  );
};

export default CreateStaffRequisition;
