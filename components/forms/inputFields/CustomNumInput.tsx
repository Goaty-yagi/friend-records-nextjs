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
  hasFormat?:boolean
}

export default function CustomNumInput({ config, hasFormat=false, onChange }: NumInputProps) {
  const format = (val: number) => `$` + val;
  const parse = (val: string) => val.replace(/^\$/, '')
  function formatHandler(e:NumInputConfig) {
    const val = e.value===0&&e.defaultValue?e.defaultValue:e.value
    return hasFormat?format(val):val
  }
  
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
            value={formatHandler(e)}
            onChange={(event) => {
              console.log("s",event, typeof event, event.length)
              onChange({ target: { name: e.name, value: Number(parse(event)) } });
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
