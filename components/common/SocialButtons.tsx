"use client";

import { FcGoogle } from "react-icons/fc";
import { FaAmazon, FaSpotify } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SocialButton } from "@/components/common";
import {
  continueWithGoogle,
  continueWithAmazon,
  continueWithSpotify,
} from "@/utils";
import { Flex, Stack, Box } from "@chakra-ui/react";
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'


interface Props {
  setEmailOpen?: any;
  noEmail?: boolean;
}

const googleFont = Roboto({ subsets: ['cyrillic'],weight:'500' })
const amazonFont = localFont({ src: '../../styles/fonts/AmazonEmberDisplay_Md.ttf' })

export default function SocialButtons({ setEmailOpen, noEmail }: Props) {
  const configs = [
    {
      provider: "google",
      icon: <FcGoogle />,
      text: "Sign in with Google",
      event: continueWithGoogle,
      hasLeft: true,
      font:googleFont.className,
      style: {
        bg: "#4285F4",
        border: "solid transparent",
        color: "white",
        _hover: {
          filter: "brightness(110%)",
        },
      },
    },
    {
      provider: "amazon",
      icon: <FaAmazon />,
      text: "Sign in with Amazon",
      event: continueWithAmazon,
      hasLeft: false,
      font:amazonFont.className,
      style: {
        bg: "linear-gradient(to bottom, #fee5a1, #f5c645)",
        border: "solid #b38b22",
        color: "black",
        fontFamily: "",
        _hover: {
          filter: "brightness(110%)",
        },
      },
    },
    // {
    //   provider: "spotify",
    //   icon: <FaSpotify />,
    //   text: "Sign in with Spotify",
    //   event: continueWithSpotify,
    //   hasLeft: false,
    //   style: {
    //     bg: "#1DB954",
    //     border: "solid #0bb346",
    //     color: "white",
    //     fontFamily: "",
    //     _hover: {
    //       filter: "brightness(110%)",
    //     },
    //   },
    // },
    {
      provider: "email",
      icon: <MdOutlineEmail />,
      text: "Sign in with Email",
      event: () => setEmailOpen(true),
      hasLeft: false,
      // font:'',
    },
  ];
  return (
    <Flex alignItems={"center"} flexDirection={"column"}>
      <Stack spacing={1.5}>
        {configs.map((e, index) => (
           <Box key={index}>
            {!noEmail ? (
                <SocialButton {...e} />
            ) : (
              <>
                {e.provider !== "email" && (
                    <SocialButton {...e} />
                )}
              </>
            )}
            </Box>
        ))}
      </Stack>
    </Flex>
  );
}
