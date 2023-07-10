import { useRouter } from "next/navigation";
import {
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { RiAccountPinCircleLine } from "react-icons/ri";

export default function MobileNavber() {
  const router = useRouter();
  return (
      <>
        <Box
          display={{ md: "none" }}
          w={"100%"}
          bottom={"0"}
          position={"absolute"}
          bg={"rgb(149 149 149 / 90%)"}
          zIndex={2}
          border={"0.2rem solid #d1f5fd"}
          borderRadius={"10px"}
        >
          <Flex
            justifyContent={"center"}
            fontFamily={"Gill Sans"}
          >
            <Flex
              onClick={() => router.push("/")}
              flexBasis={"50%"}
              flexDirection={"column"}
              alignItems={"center"}
              transition={".3s"}
              borderRight={'solid #d1f5fd'}
              _hover={{
                background: "rgb(240 240 240 / 70%)",
                color: "gray",
              }}
            >
              <AiOutlineHome fontSize={"1.5rem"} />
              <Text fontSize={"0.5rem"}>HOME</Text>
            </Flex>
            <Flex
              onClick={() => router.push("/dashboard")}
              flexBasis={"50%"}
              flexDirection={"column"}
              alignItems={"center"}
              transition={".3s"}
              borderLeft={'solid #d1f5fd'}
              _hover={{
                background: "rgb(240 240 240 / 70%)",
                color: "gray",
              }}
            >
              <RiAccountPinCircleLine fontSize={"1.5rem"} />
              <Text fontSize={"0.5rem"}>ACCOUNT</Text>
            </Flex>
          </Flex>
        </Box>
      </>
    );
}
