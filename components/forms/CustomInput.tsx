"use client";

import { ChangeEvent } from "react";
import Link from "next/link";
import { Input, Center, Flex, Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

interface Props {
  labelId: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  // children: React.ReactNode;
  // link?: {
  // 	linkText: string;
  // 	linkUrl: string;
  // };
  required?: boolean;
}

export default function CustomInput({
  labelId,
  type,
  placeholder,
  onChange,
  value,
  required = false,
}: Props) {
  return (
    <>
      <FormLabel>{labelId}</FormLabel>
      <Input
        placeholder={placeholder}
        name={labelId}
        type={type}
        value={value}
        onChange={onChange}
        variant={"outline"}
		required={required}
      />
    </>
  );
}
