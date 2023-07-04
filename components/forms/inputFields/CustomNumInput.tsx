import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";
import { useEffect } from "react";

interface NumInputConfig {
  name: string;
  value: number;
  title?: string;
  max?: number;
  min?: number;
  style?: any;
}
interface NumInputProps {
  config: NumInputConfig[];
  onChange: (e: any) => void;
}

export default function CustomNumInput({ config, onChange }: NumInputProps) {
  // const format = (val: number) => `$ ` + val;
  return (
    <Flex mt={"1rem"} w={{ base: "300px", md: "600px" }}>
      {config.map((e) => (
        <Box key={e.name} position={"relative"}>
          {e.title && (
            <Text position={"absolute"} top={"-5"} left={0}>
              {e.title}
            </Text>
          )}
          <NumberInput
            {...e.style}
            key={e.name}
            max={e.max}
            min={e.min}
            maxW="120px"
            value={e.value}
            onChange={(event) => {
              onChange({ target: { name: e.name, value: event } });
            }}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
      ))}
    </Flex>
  );
}
