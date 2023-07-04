import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Flex,
  } from "@chakra-ui/react";
  
  interface Props {
    value: number;
    onChange: (e: any) => void;
  }
  
  export default function CustomSlider({ value, onChange }: Props) {
    const format = (val: number) => `$ ` + val;
    return (
      <Flex
        mt={"1rem"}
        w={{ base: "300px", md: "600px" }}
      >
        <Slider
          flex="1"
          focusThumbOnChange={false}
          value={value}
          onChange={onChange}
          defaultValue={0}
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
  