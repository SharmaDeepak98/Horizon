"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
import CustomInput from "./CustomInput";
import { formSchema } from "@/lib/utils";


const AuthForm = ({ type = "sign-in" || "sign-up" }) => {
  const [user, setUser] = useState(null);

  // Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link
          href={"/"}
          className="flex cursor-pointer gap-1  mb-8 items-center"
        >
          <Image src="/icons/logo.svg" alt="best-logo" width={34} height={34} />
          <h1 className="text-26 font-ibm-plex-serif font-bold ">Bestank</h1>
        </Link>

        <div className="flex flex-col md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-800">
            {user ? "Link account" : type === "sign-in" ? "Sign in" : "Sign up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CustomInput control={form.control} name="username" label="Username" placeholder="Enter your Username" />
              <CustomInput control={form.control} name="password" label="Password" placeholder="Enter your Password" />
              <Button type="submit" className="form-btn">{type}</Button>
            </form>
          </Form>
        </>
      )}
    </section>
  );
};
export default AuthForm;
