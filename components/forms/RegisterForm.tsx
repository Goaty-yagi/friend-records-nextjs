"use client";

import { useRegister } from "@/hooks";
import { Form } from "@/components/forms";

export default function RegisterForm() {
  const {
    username,
    email,
    password,
    re_password,
    isLoading,
    onChange,
    onSubmit,
  } = useRegister();

  const config = [
    {
      labelText: "username",
      labelId: "username",
      placeholder: "Enter Username.",
      type: "text",
      value: username,
      required: true,
    },
    {
      labelText: "Email address",
      labelId: "email",
      placeholder: "Enter Email.",
      type: "email",
      value: email,
      required: true,
    },
    {
      labelText: "Password",
      labelId: "password",
      placeholder: "Enter Password.",
      type: "password",
      value: password,
      required: true,
    },
    {
      labelText: "Confirm password",
      placeholder: "Enter Confirmation Password.",
      labelId: "re_password",
      type: "password",
      value: re_password,
      required: true,
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Sign up"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
