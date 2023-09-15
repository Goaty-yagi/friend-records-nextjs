"use client";

import {FcGoogle} from "react-icons/fc"
import { FaAmazon }  from "react-icons/fa"
import { SocialButton } from "@/components/common";
import { continueWithGoogle, continueWithAmazon } from "@/utils";
import { Flex, Box } from "@chakra-ui/react";
export default function SocialButtons() {
  return (
    <Flex alignItems={"center"} mt={"3rem"} flexDirection={'column'}>
      <SocialButton provider="google" icon={<FcGoogle />} text={'Sign in with Google'} clickEvent={continueWithGoogle} />
      <SocialButton provider="amazon" icon={<FaAmazon />} text={'Sign in with Amazon'} clickEvent={continueWithAmazon} />
    </Flex>
  );
}
