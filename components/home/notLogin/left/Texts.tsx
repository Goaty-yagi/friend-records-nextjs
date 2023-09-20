"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Background, Buttons } from "./index";
import { useContext } from "react";
import { GlobalContext } from "@/contexts";
interface Props {
  innerWidth: number;
}

export default function Texts({ innerWidth }: Props) {
  const title = 'Friend Record'
  const text = 'Maintain great friendships and build fair relationships.'
  const globalContext = useContext(GlobalContext);
  const { H, W, defaH } = globalContext;
  const isMobileHorizontal = () => {
    return H < defaH
  }
  return (
    <Box
      position={"relative"}
      width={{ baee: innerWidth, xl: 800, "2xl": 900 }}
      h={{ base: 400, md: 600, xl: 800, "2xl": 900 }}
      zIndex={1}
    >
      <Flex
        height={"100%"}
        w={"100%"}
        justifyContent={!isMobileHorizontal()?"center":''}
        alignItems={"center"}
        flexDirection={"column"}
        m={!isMobileHorizontal()?'':'1rem'}
      >
        <Background innerWidth={innerWidth} />
        <Heading
          fontSize={{ base: "3.5rem", xl: "6rem", "2xl": "7rem" }}
          bgGradient='linear(to-l, #7928CA, #1166EE)'
          bgClip='text'
          textAlign={'center'}
        >
         {title}
        </Heading>
        <Text
          color={"gray"}
          fontSize={{ base: "1.6rem", xl:'2rem'}}
          width={{ base: "90%", lg: "50%" }}
          textAlign={'center'}
        >
          {text}
        </Text>
        <Buttons />
      </Flex>
    </Box>
  );
}
