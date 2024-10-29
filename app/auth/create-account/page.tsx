import CreateAccountForm from "@/components/dashboard/auth/CreateAccountForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { FC } from "react";

interface IProps {}

const CreateAccountPage: FC<IProps> = (props) => {
  return (
    <div className="relative flex h-full w-full flex-col justify-center">
      <div className="absolute right-5 top-1 z-10 flex items-center justify-end">
        <p className="pr-2 text-secondary">Already have an account?</p>
        <Link href="/sign-in">
          <Button className="w-fit px-6">Sign in</Button>
        </Link>
      </div>
      <section className="flex w-full flex-col items-center gap-6 px-5 py-10">
        <div className="relative flex h-fit w-full items-center justify-center rounded-3xl bg-slate-900/5 px-5 pb-12 pt-12 backdrop-blur-sm lg:pt-10">
          <CreateAccountForm />
        </div>
      </section>
    </div>
  );
};

export default CreateAccountPage;
