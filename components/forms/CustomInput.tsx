"use client";

import { ChangeEvent } from "react";
import NextLink from "next/link";
import { Input, Flex, Link, Box } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";

interface Props {
  labelId: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
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
      <Box mt={"0.5rem"}>
        <Flex justifyContent={"space-between"}>
          <FormLabel>{labelId}</FormLabel>
          {link && (
            <Link as={NextLink} href={link.linkUrl}>
              {link.linkText}
            </Link>
          )}
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
