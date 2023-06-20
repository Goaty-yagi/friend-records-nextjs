"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { toast } from 'react-toastify'
import { useRouter } from "next/navigation";
import { Input, Center, Flex, Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export default function Page() {
  const [register, { isLoading }] = useRegisterMutation();
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });
  const { username, email, password, re_password } = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log('submit')
    event.preventDefault();
    register({ username, email, password, re_password })
      .unwrap()
      .then((res) => {
        toast.success('Please check email to verify account.')
        router.push('/auth/login')
    })
      .catch((e) => {toast.error('Failed to register account')});
  };

  return (
    <>
    <form onSubmit={onSubmit}>
    <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
        placeholder='Enter Username.'
          name={"username"}
          value={username}
          onChange={onChange}
          variant={"outline"}
        />
        <FormLabel>Email address</FormLabel>
        <Input
        placeholder='Enter valid email.'
        type={'email'}
          name={"email"}
          value={email}
          onChange={onChange}
          variant={"outline"}
        />
        <FormLabel>Password</FormLabel>
        <Input
        placeholder='Enter Password.'
        type={'password'}
          name={"password"}
          value={password}
          onChange={onChange}
          variant={"outline"}
        />
        <FormLabel>Re Password</FormLabel>
        <Input
        placeholder='Enter Password Again.'
        type={'password'}
          name={"re_password"}
          value={re_password}
          onChange={onChange}
          variant={"outline"}
        />
        <Center>
          <Button type={'submit'} mt={'1rem'}>Register</Button>
        </Center>
      </FormControl>
    </form>
    </>
  );
}
