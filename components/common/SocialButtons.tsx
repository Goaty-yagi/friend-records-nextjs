"use client";

import { ImGoogle, ImFacebook } from "react-icons/im";
import { SocialButton } from "@/components/common";
import { continueWithGoogle, continueWithFacebook } from "@/utils";
import Image from "next/legacy/image";
import CustomImage from "./CustomImages";
import { Flex, Box } from "@chakra-ui/react";
export default function SocialButtons() {
  return (
    <Flex justifyContent={"center"} mt={"1rem"}>
      {/* <SocialButton provider="google" onClick={continueWithGoogle}> */}
      <Box w={'250px'} h={'50px'} position={'relative'} cursor={'pointer'} transition={'.3s'} _hover={{filter: 'brightness(110%)'}}>
      <CustomImage onClick={continueWithGoogle} layout={'fill'} objectFit={'cover'} src='/images/socials/btn_google.png'/>
      </Box>
        {/* <ImGoogle className="mr-3" /> Google Signin */}
      {/* </SocialButton> */}
      {/* <SocialButton provider='facebook' onClick={continueWithFacebook}>
				<ImFacebook className='mr-3' /> Facebook Signin
			</SocialButton> */}
    </Flex>
  );
}
