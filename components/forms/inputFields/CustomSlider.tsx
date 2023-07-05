import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
} from "@chakra-ui/react";

export interface SliderConfig {
  value: number;
  name: string;
  orientation?: string;
  max: number;
  min: number;
  style?: any;
}
interface SliderProps {
  sliderConfig: SliderConfig[];
  onChange: (e: any) => void;
}

export default function CustomSlider({ sliderConfig, onChange }: SliderProps) {
  const format = (val: number) => `$ ` + val;
  return (
    <Flex mt={"1rem"} w={{ base: "300px", md: "600px" }}>
      {sliderConfig.map((e, index) => (
        <Slider
          key={index}
          {...e}
          {...e.style}
          flex="1"
          focusThumbOnChange={false}
          onChange={(event) => {
            onChange({ target: { name: e.name, value: event } });
          }}
          defaultValue={0}
          step={1}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb color={"gray"} fontSize="sm" boxSize="20px" />
        </Slider>
      ))}
    </Flex>
  );
}
