"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldPath, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Form } from "react-hook-form";
import { CustomInspectFunction } from "util";
import { formSchema } from "@/lib/utils";
import { Control } from "react-hook-form";


const authFormSchema = formSchema('sign-up');

type CustomInputProps = {
  control: Control<z.infer<typeof authFormSchema>>;
  name: FieldPath<z.infer<typeof authFormSchema>>;
  label: string;
  placeholder: string;
};

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              className="input-class"
              type={name === "password" ? "password" : "text"}
              {...field}
            />
          </FormControl>

          <FormMessage className="form-message mt-2" />
        </div>
      )}
    />
  );
};
export default CustomInput;
