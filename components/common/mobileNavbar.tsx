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
  const configs = [
    {
      text:'Home',
      icon:AiOutlineHome,
      path:'/'
    },
    {
      text:'Account',
      icon:RiAccountPinCircleLine,
      path:"/dashboard"
    }
  ]
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
            {configs.map((e, index) => (
              <Flex
              key={index}
              onClick={() => router.push(e.path)}
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
              <e.icon fontSize={"1.5rem"} />
              <Text fontSize={"0.5rem"}>e.text</Text>
            </Flex>
            ))}
          </Flex>
        </Box>
      </>
    );
}
