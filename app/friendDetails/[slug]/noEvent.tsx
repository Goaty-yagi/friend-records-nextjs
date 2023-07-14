import { Flex, Text, Box } from "@chakra-ui/react";
import CustomImage from "@/components/common/CustomImages";
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
          border={"solid #f5d7ff"}
          w={"100%"}
          h={{base:300, md:'500'}}
          position="relative"
        >
          <CustomImage
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
