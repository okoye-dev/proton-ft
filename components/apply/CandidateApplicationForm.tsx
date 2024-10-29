"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import bongs from "@/assets/images/logo.png";
import right from "@/assets/svgs/arrow-right.svg";
import Image from "next/image";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "*",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  linkedIn: z.string().min(1, { message: "*" }),
  portfolio: z.string().optional(),
});

const CandidateApplicationForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      linkedIn: "",
      portfolio: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-5"
      >
        <section className="w-full space-y-3">
          <Image src={bongs} alt="bongs" className="w-16" />
          <h1 className="pt-3 text-xl font-bold">Apply for this role</h1>
          <small className="flex gap-4 pb-3 text-tertiary">
            Engineer - Full Time - OnSite
            <Image src={right} alt="right" width={16} height={16} />
          </small>
        </section>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <span className="flex gap-2">
                <FormLabel>Full Name</FormLabel>
                <FormMessage />
              </span>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <span className="flex gap-2">
                <FormLabel>Email</FormLabel> <FormMessage />
              </span>
              <FormControl>
                <Input placeholder="name@example.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="linkedIn"
          render={({ field }) => (
            <FormItem>
              <span className="flex gap-2">
                <FormLabel>LinkedIn</FormLabel> <FormMessage />
              </span>
              <FormControl>
                <Input placeholder="linkedin username" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="portfolio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Personal Portfolio{" "}
                <small className="text-tertiary">(optional)</small>
              </FormLabel>
              <FormControl>
                <Input placeholder="https://yourportfolio.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Continue</Button>
      </form>
    </Form>
  );
};

export default CandidateApplicationForm;
