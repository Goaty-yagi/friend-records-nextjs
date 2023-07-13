"use client";
import { Heading, Flex, Box } from "@chakra-ui/react";
import { RegisterForm } from "@/components/forms";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Flex w={"100%"} justifyContent={"center"}>
        <Box w={'600px'}> 
          <Heading mt={"2rem"} textAlign={"center"}>
            Register
          </Heading>
          {<RegisterForm />}
        </Box>
      </Flex>
    </>
  );
}
