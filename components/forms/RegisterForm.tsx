"use client";

import { useRegister } from "@/hooks";
import { Form } from "@/components/forms";
import NextLink from "next/link";
import { Link, Text, Flex } from "@chakra-ui/react";

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
    <>
      <Form
        config={config}
        isLoading={isLoading}
        btnText="Sign up"
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {/* <Flex flexDirection={'column'} alignItems={'center'} mt={'0.5rem'} borderRadius={'10px'} border={'solid #83d6ff'} bg={'#605d77'} p={'0.5rem'}>
        <Text color={'white'} textAlign={'center'}>You have an already account or social accounts to register?
        <span><Link as={NextLink} ml={'0.5rem'} color={'#7E7EFD'} href={'/auth/login'}>Login here</Link></span></Text>
      </Flex> */}
    </>
  );
}
