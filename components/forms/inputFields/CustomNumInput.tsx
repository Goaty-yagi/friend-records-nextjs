import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex
} from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface Props {
  value: number;
  name: string
  setField:(e: any) => void;
  onChange: (e: any) => void;
}

export default function CustomNumInput({ value, name,setField, onChange }: Props) {
  const numOnChange = ((event:any) => {
    onChange(event)
    setField(name)
  })  
  // const format = (val: number) => `$ ` + val;
  return (
    <Flex
      mt={"1rem"}
      w={{ base: "300px", md: "600px" }}
    >
      <NumberInput
        maxW="120px"
        mr="2rem"
        value={value}
        onChange={numOnChange}
        min={0}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  );
}
