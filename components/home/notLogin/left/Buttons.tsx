"use client";

import { HStack, Button } from "@chakra-ui/react";
import { Login } from "@/components/auth";
import { RegisterForm } from "@/components/forms";
import { CustomModal } from "@/components/modals";

export default function Buttons() {
  const SignupButton = (
    <Button
      background={"#1166EE"}
      color={"white"}
      fontSize={{
        base: "1.2rem",
        md: "1.7rem",
      }}
      width={{ base: "5rem", md: "8rem" }}
      height={{
        base: "2.5rem",
        md: "4rem",
      }}
    >
      SignUp
    </Button>
  );
  const LoginButton = (
    <Button
      variant="outline"
      colorScheme="#1166EE"
      color={"#1166EE"}
      border="2px"
      bg={"#f3f3f3"}
      _hover={{ color: "gray", colorScheme: "gray" }}
      transition={".3s"}
      fontSize={{
        base: "1.2rem",
        md: "1.7rem",
        xl: "2rem",
      }}
      width={{ base: "5rem", md: "8rem" }}
      height={{
        base: "2.5rem",
        md: "4rem",
      }}
    >
      Login
    </Button>
  );
  return (
    <>
      <HStack spacing="24px" mt={"1.5rem"} zIndex={100}>
        <CustomModal title='Create your account' content={<RegisterForm/>} open={SignupButton}/>
        <CustomModal title='Login your account' content={<Login/>} open={LoginButton}/>
      </HStack>
    </>
  );
}
