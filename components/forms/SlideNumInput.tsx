import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent } from "react";

interface Props {
  value: number;
  onChange: (e: any) => void;
}

export default function SlideNumInput({ value, onChange }: Props) {
  const format = (val: number) => `$ ` + val;
  return (
    <Flex
      mt={"1rem"}
      w={{ base: "300px", md: "600px" }}
    >
      <NumberInput
        maxW="120px"
        mr="2rem"
        value={format(value)}
        onChange={onChange}
        min={0}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Slider
        flex="1"
        focusThumbOnChange={false}
        value={value}
        onChange={onChange}
        defaultValue={500}
        min={0}
        max={1000}
        step={1}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb color={"gray"} fontSize="sm" boxSize="20px" />
      </Slider>
    </Flex>
  );
}
