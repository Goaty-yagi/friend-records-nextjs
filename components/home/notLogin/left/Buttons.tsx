"use client";

import { HStack, Button } from "@chakra-ui/react";
import { Login,Register } from "@/components/auth";
// import { RegisterForm } from "@/components/forms";
import { CustomModal } from "@/components/modals";
import { useContext, useState } from "react";
import { GlobalContext } from "@/contexts";
import { SocialButtons } from "@/components/common";


export default function Buttons() {
  const globalContext = useContext(GlobalContext);
  const { H, W, defaH } = globalContext;
  const isMobileHorizontal = () => {
    return H < defaH
  }
  const SignupButton = (
    <Button
      background={"#1166EE"}
      color={"white"}
      fontSize={{
        base: "1.2rem",
        md: !isMobileHorizontal()?"1.7rem":"1.3rem",
      }}
      width={{ base: "5rem", md: !isMobileHorizontal()?"8rem":"6rem" }}
      height={{
        base: "2.5rem",
        md: !isMobileHorizontal()?"4rem":"3rem",
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
        md: !isMobileHorizontal()?"1.7rem":"1.3rem",
        xl: "2rem",
      }}
      width={{ base: "5rem", md: !isMobileHorizontal()?"8rem":"6rem" }}
      height={{
        base: "2.5rem",
        md: !isMobileHorizontal()?"4rem":"3rem",
      }}
    >
      Login
    </Button>
  );
  return (
    <>
      <HStack spacing="24px" mt={"1.5rem"} zIndex={100}>
        <CustomModal
          title="Create your account"
          content={<Register/>}
          open={SignupButton}
          // closeEvent={() => setEmailOpen(false)}
        />
        <CustomModal
          title="Login your account"
          content={<Login />}
          open={LoginButton}
        />
      </HStack>
    </>
  );
}
