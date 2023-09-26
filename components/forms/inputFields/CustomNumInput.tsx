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

interface NumInputConfig {
  name: string;
  value: number;
  defaultValue?:number;
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
      {config.map((e, index) => (
        <Box key={index} position={"relative"}>
          {e.title && (
            <Text position={"absolute"} top={"-6"} left={0}>
              {e.title}
            </Text>
          )}
          <NumberInput
            {...e.style}
            max={e.max}
            min={e.min}
            maxW="120px"
            value={e.value===0&&e.defaultValue?e.defaultValue:e.value}
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
