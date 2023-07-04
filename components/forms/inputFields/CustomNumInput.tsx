import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex
} from "@chakra-ui/react";

interface Props {
  value: number;
  onChange: (e: any) => void;
}

export default function CustomNumInput({ value, onChange }: Props) {
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
        onChange={onChange}
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
