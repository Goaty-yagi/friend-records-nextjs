import { Flex, Text, Box } from "@chakra-ui/react";
import Image from "next/legacy/image";

export default function NoEvent() {
  return (
    <>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Text
          color={"#1166EE"}
          fontFamily={"Gill Sans"}
          fontWeight="bold"
          fontSize={{ base: "2rem", md: "3rem" }}
        >
          Create a First Event
        </Text>
        <Box
          boxShadow="xl"
          border={"solid #cf5701"}
          w={"80%"}
          h={400}
          position="relative"
        >
          <Image
            priority={true}
            src={"/images/event.jpg"}
            layout="fill"
            objectFit="cover"
            alt={"asset"}
          />
        </Box>
      </Flex>
    </>
  );
}
