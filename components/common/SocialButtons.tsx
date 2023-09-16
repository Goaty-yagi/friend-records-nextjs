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

interface Props {
  setEmailOpen?: any;
  noEmail?: boolean;
}

export default function SocialButtons({ setEmailOpen, noEmail }: Props) {
  const configs = [
    {
      provider: "google",
      icon: <FcGoogle />,
      text: "Sign in with Google",
      event: continueWithGoogle,
      hasLeft: true,
      style: {
        bg: "#4285F4",
        border: "solid transparent",
        color: "white",
        fontFamily: "",
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
