"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import bongs from "@/assets/images/logo.png";
import eye from "@/assets/svgs/eye.svg";
import Image from "next/image";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "*",
  }),
});

const CreateAccountForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    form.reset();
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-5"
      >
        <section className="flex w-full flex-col items-center justify-center gap-3 py-3">
          <Image src={bongs} alt="bongs" className="w-16" />
          <strong className="text-xl">Setup Your Account</strong>
        </section>

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
          name="password"
          render={({ field }) => (
            <FormItem>
              <span className="flex gap-2">
                <FormLabel>Password</FormLabel> <FormMessage />
              </span>
              <FormControl>
                <div className="relative bg-transparent">
                  <Input
                    placeholder="enter password"
                    type={showPassword ? "text" : "password"}
                    {...field}
                  />
                  <Image
                    src={eye}
                    alt="show"
                    width={16}
                    height={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </FormControl>
              <FormDescription>Must be at least 8 characters</FormDescription>
            </FormItem>
          )}
        />

        <Button type="submit">Create Account</Button>
      </form>
    </Form>
  );
};

export default CreateAccountForm;
