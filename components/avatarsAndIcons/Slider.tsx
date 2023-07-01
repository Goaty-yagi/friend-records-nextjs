import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState, useRef, forwardRef } from "react";
import {SelectedSvg as Selected, SliderAction} from './index'

interface Config {
  name: string;
  svg: string;
}

interface Props {
  selected:string
  svgArray: Config[];
  setFun: any;
  defaultSvg?: string;
}

export default function Slider({ svgArray, setFun, defaultSvg }: Props) {
  const [selectedSvg, setSelectedSvg] = useState("");
  const [eachSlideWidth, setEachSlideWidth] = useState(56);
  const props = {
    h: eachSlideWidth,
    w: eachSlideWidth,
    fontSize: eachSlideWidth,
  };
  useEffect(() => {
    if (typeof defaultSvg !== "undefined") {
      setSelectedSvg(defaultSvg)
      setFun(defaultSvg)
    } else {
      setSelectedSvg(svgArray[0].svg)
      setFun(svgArray[0].name)
    }
  }, []);
  // useEffect(() => {
  //   console.log(selectedSvg)
  //   setFun(() => {defaultSvg});
  // },[selectedSvg])
  return (
    <>
      <Flex w={"100%"} h={"100%"} alignItems={"center"} className={"out"}>
        <Selected selectedSvg={selectedSvg} />

        <SliderAction
          svgArray={svgArray}
          setFun={setFun}
          eachSlideWidth={eachSlideWidth}
          setSelectedSvg={setSelectedSvg}
        />
      </Flex>
    </>
  );
}
