"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Errors } from "@/lib/validation";

export function useForm<T extends Record<string, string>>(
  initial: T,
  validate: (values: T) => Errors<T>
) {
  const [values, setValues] = useState<T>(initial);
  const [errors, setErrors] = useState<Errors<T>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.values(found).every((x) => !x)) setSubmitted(true);
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setSubmitted(false);
  };

  return { values, errors, submitted, handleChange, handleSubmit, reset };
}
