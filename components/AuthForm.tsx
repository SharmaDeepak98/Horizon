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
import { Loader2 } from "lucide-react";

const AuthForm = ({ type = "sign-in" || "sign-up" }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const authFormSchema = formSchema(type)

  // Define form
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",

    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof authFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);

    setTimeout(() => {}, 2000);
    console.log(values);
    setIsLoading(false);
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
              {type === "sign-up" && (
                <>
                  <div className="flex gap-6">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="e.g. John"
                    />

                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="e.g. Doe"
                    />
                  </div>

                  <CustomInput
                    control={form.control}
                    name="address"
                    label="Address"
                    placeholder="Enter your Address"
                  />
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <CustomInput
                        control={form.control}
                        name="state"
                        label="State"
                        placeholder="e.g. California"
                      />
                      <CustomInput
                        control={form.control}
                        name="postalCode"
                        label="Postal Code"
                        placeholder="e.g. 123456"
                      />
                    </div>

                    <div className="flex gap-6">
                      <CustomInput
                        control={form.control}
                        name="dob"
                        label="Date of Birth"
                        placeholder="yyyy-mm-dd"
                      />
                      <CustomInput
                        control={form.control}
                        name="ssn"
                        label="SSN"
                        placeholder="e.g. 123-45-6789"
                      />
                    </div>
                  </div>
                </>
              )}

              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your Email"
              />
              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your Password"
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" />
                    </>
                  ) : (
                    <>{type === "sign-in" ? "Sign In" : "Sign Up"}</>
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-16 text-gray-600 font-normal">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "Sign up" : "Sign in"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};
export default AuthForm;
