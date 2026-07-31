"use client";

import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

import { Textarea } from "@/components/ui/textarea";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
};

export default function ContactTextarea<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field>
          <FieldLabel>{label}</FieldLabel>
          <FieldContent>
            <Textarea
              {...field}
              placeholder={placeholder}
              rows={5}
              aria-invalid={!!fieldState.error}
            />

            <FieldError errors={fieldState.error ? [fieldState.error] : []} />
          </FieldContent>
        </Field>
      )}
    />
  );
}
