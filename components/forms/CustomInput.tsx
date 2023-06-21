"use client";

import { ChangeEvent } from "react";
import NextLink from "next/link";
import { Input, Center, Flex, Button, Link, Box } from "@chakra-ui/react";
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
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
}

export default function CustomInput({
  labelId,
  type,
  placeholder,
  onChange,
  value,
  link,
  required = false,
}: Props) {
  return (
    <>
	<Box mt={'0.5rem'}>
	<Flex justifyContent={'space-between'}>
    <FormLabel>{labelId}</FormLabel>
	{link && <Link as={NextLink} href={link.linkUrl}>{link.linkText}</Link>}
	</Flex>
      <Input
        placeholder={placeholder}
        name={labelId}
        type={type}
        value={value}
        onChange={onChange}
        variant={"outline"}
        required={required}
      />
	</Box>
    </>
  );
}
