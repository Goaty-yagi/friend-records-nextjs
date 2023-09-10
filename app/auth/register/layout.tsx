"use client";
import { Heading, Flex, Box, Text } from "@chakra-ui/react";
import { PrivateRouterWithAuth } from "@/components/common/PrivateRouter";
import { RegisterForm } from "@/components/forms";
import { useRouter } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";

export default function Layout({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  return (
    <>
      <PrivateRouterWithAuth>
        <Flex w={"100%"} justifyContent={"center"}>
          <Box w={"600px"}>
            <Heading mt={"2rem"} textAlign={"center"}>
              Register
            </Heading>
            {<RegisterForm />}
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
          </Box>
        </Flex>
      </PrivateRouterWithAuth>
    </>
  );
}
