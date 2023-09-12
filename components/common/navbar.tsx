"use client";

import { useAppSelector } from "@/redux/hooks";
import MobileNavber from "./mobileNavbar";

import { Image, Flex, Button, chakra, Link, Show, Box } from "@chakra-ui/react";
import NextLink from "next/link";

import Logo from "@/public/logo.svg";

import { IoHomeOutline } from "react-icons/io5";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { FaBlackTie } from "react-icons/fa";

export default function Navbar() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const data = (isAuthenticated: boolean) => {
    return [
      {
        labelText: "Home",
        path: "/",
        isVisible: true,
        icon: <IoHomeOutline />,
      },
      // {
      //   labelText: "Login",
      //   path: "/auth/login",
      //   isVisible: !isAuthenticated,
      // },
      // {
      //   labelText: "Register",
      //   path: "/auth/register",
      //   isVisible: !isAuthenticated,
      // },
      {
        labelText: "Account",
        isVisible: isAuthenticated,
        path: "/dashboard",
        icon: <RiAccountPinCircleLine />,
      },
    ];
  };

  return (
    <chakra.header id="header">
      {isAuthenticated && (
        <Flex as="nav">
          <Show breakpoint="(min-width: 600px)">
            <Flex w={"100%"} px="6" py="5" align="center" justify="flex-end">
              <Image
                position={"absolute"}
                left={0}
                src={Logo.src}
                alt="logo"
                h="50px"
                m={"0.5rem"}
              />
              {data(isAuthenticated).map(
                (item, i) =>
                  item.isVisible && (
                    <Link
                      key={i}
                      as={NextLink}
                      border={"solid #efafc5"}
                      borderRadius={'10px'}
                      bg={"#313131f2"}
                      color={"white"}
                      mr={'0.5rem'}
                      // _first={{ borderLeft: "solid #ffab00" }}
                      _hover={{ bg: "gray" }}
                      href={item.path ? item.path : ""}
                    >
                      <Button
                        variant="nav"
                        borderRadius={"none"}
                        leftIcon={item.icon ? item.icon : <></>}
                        p={"0 1.3rem"}
                      >
                        {item.labelText}
                      </Button>
                    </Link>
                  )
              )}
            </Flex>
          </Show>
          <Show breakpoint="(max-width: 599px)">
            <Box zIndex={1} w={"100%"} position={"fixed"} bottom={0} left={0}>
              <MobileNavber />
            </Box>
          </Show>
        </Flex>
      )}
    </chakra.header>
  );
}
