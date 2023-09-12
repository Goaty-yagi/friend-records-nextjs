import { Flex, Box } from "@chakra-ui/react";

export default function Wrapper({children}:{children:React.ReactNode}) {

  return (
    <Flex
      w={"100%"}
      minH={"200px"}
      p={{ base: "0.3rem", md: "1rem" }}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box mt={"1rem"}>
      </Box>
      {children}
    </Flex>
  );
}
