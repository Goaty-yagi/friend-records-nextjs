"use client";

import {
  Box, Flex, Stack
} from "@chakra-ui/react";

interface Props{
    icon?: JSX.Element
    header?:string
    text?:string
    mr?:string
}

export default function CustomField({ icon, header, text, mr }:Props) {
    return (
      <>
        <Flex key={header} w={"100%"}>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            mr={mr ? mr : "1rem"}
          >
            {icon}
          </Flex>
          <Stack w={"100%"} spacing="-8px">
            <Box fontWeight={"bold"}>{header}</Box>
            <Box height={"20px"}>
              <Box w={"40%"} color={"gray"} position={"absolute"}>
                {text}
              </Box>
            </Box>
          </Stack>
        </Flex>
      </>
    );
  }