"use client";

import { ChangeEvent, FormEvent } from "react";
import { CustomInput } from "./inputFields";
import { Spinner } from "@/components/common";
import { Center, Flex, Button } from "@chakra-ui/react";
interface Config {
  labelText: string;
  labelId: string;
  type: string;
  value: string;
  placeholder: string;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
}

interface Props {
  config: Config[];
  isLoading: boolean;
  btnText: string;
  btnPosition?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
}

export default function Form({
  config,
  isLoading,
  btnText,
  btnPosition = "flex-end",
  onChange,
  onSubmit,
  children,
}: Props) {
  return (
    <>
      <form onSubmit={onSubmit}>
        {config.map((input) => (
          <CustomInput
            key={input.labelId}
            labelId={input.labelId}
            labelText={input.labelText}
            placeholder={input.placeholder}
            type={input.type}
            onChange={onChange}
            value={input.value}
            link={input.link}
            required={input.required}
          />
        ))}

        <Flex mt={"1rem"} flexDirection={"column"}>
          {typeof children !== "undefined" && children}
          <Flex justifyContent={btnPosition}>
            <Button type="submit" mt={"0.7rem"} isDisabled={isLoading}>
              {isLoading ? <Spinner /> : `${btnText}`}
            </Button>
          </Flex>
        </Flex>
      </form>
    </>
  );
}
