import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
export interface SliderConfig {
  value: number;
  defaultValue?:number
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
  const [isvVertical, setIsvVertical] = useState(false)

  useEffect(() => {
    const orientationVertical = Object.keys(sliderConfig[0]).includes('orientation')
    if(orientationVertical) {
      setIsvVertical(sliderConfig[0].orientation==='vertical'?true:false)
    }
  },[])
  return (
    <Flex mt={"1rem"} w={isvVertical?'':{base: "300px", md: "600px" }}>
      {sliderConfig.map((e, index) => (
        <Slider
          key={index}
          {...e}
          {...e.style}
          flex="1"
          value={e.value===0&&e.defaultValue?e.defaultValue:e.value}
          focusThumbOnChange={false}
          onChange={(event) => {
            onChange({ target: { name: e.name, value: event } });
          }}
          step={1}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb color={"gray"} fontSize="sm" boxSize="12px" />
        </Slider>
      ))}
    </Flex>
  );
}
