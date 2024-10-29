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
import bongs from "@/assets/images/westfield-wide-logo.jpg";
import Image from "next/image";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "*",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z
    .string()
    .min(10, { message: "*" })
    .regex(/^\+?\d+$/, { message: "Phone number must contain only digits." }),
  nextOfKin: z.string().min(2, {
    message: "*",
  }),
  address: z.string().min(2, {
    message: "*",
  }),
});

const CompleteAccountRegistrationForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      nextOfKin: "",
      address: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    form.reset();
  };

  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-center gap-7 rounded-3xl bg-slate-900/5 px-5 pb-12 pt-12 backdrop-blur-sm lg:pt-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-5"
        >
          <section className="flex w-full flex-col items-center justify-center gap-3 py-3">
            <Image src={bongs} alt="westfield" width={120} height={120} />
            <strong className="text-xl">Complete Account Registration</strong>
          </section>

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <span className="flex gap-2">
                  <FormLabel>Full Name</FormLabel> <FormMessage />
                </span>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Email Field */}
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

          {/* Phone Number Field */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <span className="flex gap-2">
                  <FormLabel>Phone Number</FormLabel> <FormMessage />
                </span>
                <FormControl>
                  <Input placeholder="+2349148567890" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Next of Kin Field */}
          <FormField
            control={form.control}
            name="nextOfKin"
            render={({ field }) => (
              <FormItem>
                <span className="flex gap-2">
                  <FormLabel>Next of Kin</FormLabel> <FormMessage />
                </span>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Address Field */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <span className="flex gap-2">
                  <FormLabel>Address</FormLabel> <FormMessage />
                </span>
                <FormControl>
                  <Input placeholder="14A Elm Street" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default CompleteAccountRegistrationForm;
