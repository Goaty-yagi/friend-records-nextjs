"use client";

import { ChangeEvent, useEffect } from "react";
import NextLink from "next/link";
import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Flex,
  Link,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { FormLabel } from "@chakra-ui/react";
import { ImEyeBlocked, ImEye } from "react-icons/im";
import { GoMail } from "react-icons/go";
import { RiLockPasswordLine, RiUserLine } from "react-icons/ri";

interface Props {
  labelId: string;
  labelText: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  // defaultValue?: string;
  placeholder: string;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
}

export default function CustomInput({
  labelId,
  labelText,
  type,
  placeholder,
  onChange,
  value,
  // defaultValue,
  link,
  required = false,
}: Props) {

  const [showPassword, setShowpassword] = useState(false);

  const isPassword = () => {
    if (type === "password") {
      return true;
    }
  };
  function leftElement() {
    if (labelId === "username") {
      return <RiUserLine />;
    } else if (labelId === "email") {
      return <GoMail />;
    } else if (isPassword()) {
      return <RiLockPasswordLine />;
    }
  }
  return (
    <>
      <Box mt={"0.5rem"}>
        <Flex justifyContent={"space-between"}>
          <FormLabel>{labelText}</FormLabel>
          {link && (
            <Link as={NextLink} href={link.linkUrl}>
              {link.linkText}
            </Link>
          )}
        </Flex>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            {leftElement()}
          </InputLeftElement>
          <Input
            placeholder={placeholder}
            name={labelId}
            type={isPassword() && showPassword ? "text" : type}
            value={value}
            onChange={onChange}
            variant={"outline"}
            required={required}
          />
          {isPassword() && (
            <InputRightElement>
              <IconButton
                aria-label="hide-or-show-password"
                onClick={() => setShowpassword(!showPassword)}
                background={"none"}
                size="sm"
                color={"gray.500"}
                icon={showPassword ? <ImEye /> : <ImEyeBlocked />}
              />
            </InputRightElement>
          )}
        </InputGroup>
      </Box>
    </>
  );
}
