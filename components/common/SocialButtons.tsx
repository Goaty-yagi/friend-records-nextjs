"use client";

import {FcGoogle} from "react-icons/fc"
import { SocialButton } from "@/components/common";
import { continueWithGoogle, continueWithFacebook } from "@/utils";
import { Flex, Box } from "@chakra-ui/react";
export default function SocialButtons() {
  return (
    <Flex justifyContent={"center"} mt={"3rem"}>
      <SocialButton provider="google" icon={<FcGoogle />} text={'Sign in with Google'} clickEvent={continueWithGoogle} />
    </Flex>
  );
}
