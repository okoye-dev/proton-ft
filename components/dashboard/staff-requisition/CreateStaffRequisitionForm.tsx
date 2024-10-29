"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";

import { Input } from "@/components/ui/input";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import close from "@/assets/svgs/close.svg";
import { Button } from "@/components/ui/button";
import calendar from "@/assets/svgs/calendar.svg";
import addNew from "@/assets/svgs/add.svg";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  useGetJobTitles,
  useGetLocations,
} from "@/app/dashboard/hooks/staff-requisition";
import Image from "next/image";

interface IProps {}

const formSchema = z.object({
  unit: z
    .string()
    .min(2, {
      message: "*",
    })
    .max(50),
  jobTitle: z.string({ required_error: "*" }),
  location: z.string({
    required_error: "*",
  }),
  recruitmentType: z.string({
    required_error: "Please select a recruitment type.",
  }),
  exploymentType: z.string({
    required_error: "Please select an employment type.",
  }),
  reasonsForHire: z
    .string()
    .min(10, {
      message: "Must be at least 10 characters.",
    })
    .max(500, {
      message: "Must not be longer than 500 characters.",
    }),
  startDate: z.date({
    required_error: "*",
  }),
});

const CreateStaffRequisitionForm: FC<IProps> = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      unit: "",
      recruitmentType: "",
      exploymentType: "",
      reasonsForHire: "",
      startDate: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const jobTitles = useGetJobTitles();
  const locations = useGetLocations();

  const [documentNames, setDocumentNames] = useState<string[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("not yet");

    if (e.target.files) {
      console.log("yes");

      const filesArray = Array.from(e.target.files);
      const fileNames = filesArray.map((file) => file.name);
      setDocumentNames((prevNames) => [...prevNames, ...fileNames]);
      console.log("----", fileNames);
    }
  };

  return (
    <div className="border-border-subheader flex w-full max-w-3xl flex-col gap-5 rounded-2xl border bg-white p-[20px]">
      <section className="flex flex-col gap-3 border-b pb-5">
        <div className="flex justify-between">
          <strong className="text-xl">Requisition Details</strong>
          <Image src={close} alt="close" height={25} width={25} />
        </div>
        <small className="text-secondary">
          Request for a new staff member for your team.
        </small>
      </section>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Job Title <FormMessage />
                </FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Job title" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {jobTitles.map((jobTitle) => (
                      <SelectItem key={jobTitle.id} value={jobTitle.title}>
                        {jobTitle.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="unit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Unit <FormMessage />
                </FormLabel>

                <FormControl>
                  <Input placeholder="Unit" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Location <FormMessage />
                </FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location.id} value={location.name}>
                        {location.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="recruitmentType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Recruitment Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-8 space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="replacement" />
                      </FormControl>
                      <FormLabel className="text-xs">Replacement</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="vacant" />
                      </FormControl>
                      <FormLabel className="text-xs">Vacant </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="new" />
                      </FormControl>
                      <FormLabel className="text-xs">New</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reasonsForHire"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Reasons For Hire{" "}
                  <small className="text-secondary">
                    (Explain reasons for hire and the impacts on the company)
                  </small>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="..."
                    className="min-h-28 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="exploymentType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Employment Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-8 space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="fullTime" />
                      </FormControl>
                      <FormLabel className="text-xs">Full time</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="partTime" />
                      </FormControl>
                      <FormLabel className="text-xs">Part time </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="contract" />
                      </FormControl>
                      <FormLabel className="text-xs">Contract</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="trainee" />
                      </FormControl>
                      <FormLabel className="text-xs">Trainee</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>
                  Proposed Start Date <FormMessage />
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "flex w-full justify-normal gap-3 pl-3 font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        <Image
                          src={calendar}
                          alt="calendar"
                          className="opacity-50"
                          width={16}
                          height={16}
                        />{" "}
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span className="text-tertiary">Pick a date</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

          {/* Documents */}
          <FormItem>
            <FormLabel>
              Necessary Document Uploads
              <FormMessage />
            </FormLabel>

            <FormControl>
              <div className="flex flex-wrap gap-2">
                <ul className="flex flex-wrap gap-2">
                  {documentNames.map((name, index) => (
                    <li>
                      <Button
                        variant={"outline"}
                        key={index}
                        className="bg-lightblue flex h-[43px] w-fit justify-start overflow-hidden text-ellipsis text-secondary"
                      >
                        {name}
                      </Button>
                    </li>
                  ))}
                </ul>
                <Button className="h-fit w-[100px] overflow-hidden border-none bg-transparent p-0 shadow-none hover:bg-transparent">
                  <Image
                    src={addNew}
                    alt="add new"
                    className="cursor-pointer"
                    width={100}
                    height={100}
                  />
                  <Input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="absolute w-[100px] opacity-0"
                  />
                </Button>
              </div>
            </FormControl>
          </FormItem>

          <Button type="submit">Submit Request</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateStaffRequisitionForm;
