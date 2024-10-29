import CompleteAccountRegistrationForm from "@/components/dashboard/auth/CompleteAccountRegistration";
import React, { FC } from "react";

interface IProps {}

const SignInPage: FC<IProps> = (props) => {
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <section className="flex w-full flex-col items-center gap-6 px-5 py-10">
        <CompleteAccountRegistrationForm />
      </section>
    </div>
  );
};

export default SignInPage;
