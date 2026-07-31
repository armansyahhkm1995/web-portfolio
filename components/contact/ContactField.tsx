"use client";

import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type ContactFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
};

export default function ContactField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: ContactFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field>
          <FieldLabel>{label}</FieldLabel>
          <FieldContent>
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              aria-invalid={!!fieldState.error}
            />
            <FieldError errors={fieldState.error ? [fieldState.error] : []} />
          </FieldContent>
        </Field>
      )}
    />
  );
}
