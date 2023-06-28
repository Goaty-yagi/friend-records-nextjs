"use client";

import { ChangeEvent, FormEvent } from "react";
import { CustomInput } from "@/components/forms";
import { Spinner } from "@/components/common";
import { Center, Button } from "@chakra-ui/react";
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
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({
  config,
  isLoading,
  btnText,
  onChange,
  onSubmit,
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

        <Center mt={"1rem"}>
          <Button type="submit" isDisabled={isLoading}>
            {isLoading ? <Spinner /> : `${btnText}`}
          </Button>
        </Center>
      </form>
    </>
  );
}
