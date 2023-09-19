"use client";

// import Image from "next/legacy/image";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

interface Props {
  innerWidth: number;
}

export default function MainImage({ innerWidth }: Props) {
  return (
    <Box
      position={"absolute"}
      bottom="0"
      w={{ md: 200, xl: 300, "2xl": 350 }}
      h={{ md: 200, xl: 300, "2xl": 350 }}
      aspectRatio={"281/256"}
      zIndex={-10}
    >
      <Box aspectRatio={"281/256"} w={"100%"}>
        <Image
          position={"absolute"}
          bottom="0"
          src={"/images/home/Asset3.png"}
          maxH={"100%"}
          maxW={"100%"}
          alt={"asset"}
        />
      </Box>
    </Box>
  );
}
// const ratio = 1.09765625; // width is bigger than height
//   const imgConWidth = {
//     md: 200,
//     xl: 300,
//     "2xl": 350,
//   };
//   w={{ md: ratioCulculate(imgConWidth.md), xl: ratioCulculate(imgConWidth.xl), "2xl": ratioCulculate(imgConWidth['2xl']) }}
//   function ratioCulculate({ props }: any) {
//     return props * ratio;
// }
