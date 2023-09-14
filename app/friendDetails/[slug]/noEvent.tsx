import { Flex, Text, Box } from "@chakra-ui/react";
import CustomImage from "@/components/common/CustomImages";
import Image from "next/legacy/image";
import { useContext, useRef } from "react";
import { GlobalContext } from "@/contexts";

export default function NoEvent() {
  const globalContext = useContext(GlobalContext);
  const { H, W, defaH } = globalContext;
  const imageRefs = useRef(null);
  return (
    <>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Text
          color={"#1166EE"}
          fontFamily={"Gill Sans"}
          fontWeight="bold"
          fontSize={{ base: "1.9rem", md: "3rem" }}
          textAlign={"center"}
        >
          Create a First Event
        </Text>
        <Box
          ref={imageRefs}
          boxShadow="xl"
          border={"solid #f5d7ff"}
          w={"90%"}
          h={{ base: W*0.9, md: "540" }}
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
