import { Flex, Box } from "@chakra-ui/react";
import Image from "next/legacy/image";

interface Config {
  name: string;
  svg: string;
}

interface Props {
  svgArray: Config[];
  eachSlideWidth: number;
  setFun:any
  setSelectedSvg: any;
}

export default function SlideItems({
  svgArray,
  setFun,
  eachSlideWidth,
  setSelectedSvg,
}: Props) {
  // const clickAction = (svg: string) => {
  //   setSelectedSvg(svg);
  //   setFun()
  // };
  if (svgArray.length) {
    return (
      <Flex>
        {svgArray.map((file, index) => {
          return (
            <Box
              h={eachSlideWidth + "px"}
              w={eachSlideWidth + "px"}
              key={index}
              borderRadius={"15px"}
              _hover={{ bg: "#ececec" }}
              transition={".3s"}
              position="relative"
              onClick={() => {
                // clickAction(file.svg);
                setSelectedSvg(file.svg)
                setFun(file.name)
              }}
            >
              <Image src={file.svg} layout="fill" />
            </Box>
          );
        })}
      </Flex>
    );
  }
  return <></>;
}
