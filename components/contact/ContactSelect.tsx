"use client";

import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  readonly label: string;
  readonly value: string;
};

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder: string;
  options: ReadonlyArray<Option>;
};

export default function ContactSelect<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  options,
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field>
          <FieldLabel>{label}</FieldLabel>
          <FieldContent>
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className="bg-black">
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError errors={fieldState.error ? [fieldState.error] : []} />
          </FieldContent>
        </Field>
      )}
    />
  );
}
