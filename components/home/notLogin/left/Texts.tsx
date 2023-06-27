"use client";

import {
  Box, Flex, Heading, Text
} from "@chakra-ui/react";
import {Background, Buttons} from "./index";
import { CustomModal } from '@/components/modals'

interface Props {
  innerWidth:number
}

export default function Texts({innerWidth}:Props) {
    return (
      <Box
        position={"relative"}
        width={{ baee: innerWidth, xl: 800, "2xl": 900 }}
        h={{ base: 400, md: 600, xl: 800, "2xl": 900 }}
      >
        <Flex
          height={"100%"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Background innerWidth={innerWidth} />
          <Heading
            fontSize={{ base: "4rem", xl: "6rem", "2xl": "7rem" }}
            color={"#1166EE"}
          >
            Tally Book
          </Heading>
          <Text
            color={"gray"}
            fontSize={"2rem"}
            width={{ base: "90%", lg: "50%" }}
          >
            lorem hjkhkjdh hfjkshfjsk fhkjshadfjk shf hdsjklf hjksl fhj
          </Text>
          <Buttons />
        </Flex>
      </Box>
    );
  }