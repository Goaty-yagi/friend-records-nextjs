import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
} from "@chakra-ui/react";

interface Props {
  value: number;
  name?: string;
  setField?: (e: any) => void;
  onChange: (e: any) => void;
}

export default function CustomSlider({ value,name, setField, onChange }: Props) {
  const format = (val: number) => `$ ` + val;
  const numOnChange = (event: any) => {
    onChange(event);
    if(typeof setField !== 'undefined') {
      setField(name);
    }
  };
  return (
    <Flex mt={"1rem"} w={{ base: "300px", md: "600px" }}>
      <Slider
        flex="1"
        focusThumbOnChange={false}
        value={value}
        onChange={numOnChange}
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
