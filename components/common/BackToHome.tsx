import { Box, Text, Flex } from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
export default function BackToHome() {
  const router = useRouter();
  return (
    <Box display={"inline-block"}>
      <Flex
        alignItems={"center"}
        p={"0.5rem"}
        transition={"300ms"}
        borderRadius={"5px"}
        cursor={"pointer"}
        _hover={{ bg: "gray" }}
      >
        <IoHomeOutline />
        <Text ml={"0.3rem"} onClick={() => router.push("/")}>
          Back to home
        </Text>
      </Flex>
    </Box>
  );
}
