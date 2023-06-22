"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";

import { Image, Flex, Button, chakra, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import Logo from "@/public/logo.svg";

export default function Navbar() {
  const dispatch = useAppDispatch();

  const [logout] = useLogoutMutation();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      });
  };
  const data = (isAuthenticated: boolean) => {
    console.log("CHECK", isAuthenticated);
    return [
      {
        text: "Home",
        path: "/",
        isVisible: true,
      },
      {
        text: "Login",
        path: "/auth/login",
        isVisible: !isAuthenticated,
      },
      {
        text: "Register",
        path: "/auth/register",
        isVisible: !isAuthenticated,
      },
      {
        text: "Logout",
        isVisible: isAuthenticated,
        clickEvent: handleLogout,
      },
      {
        text: "Dashboard",
        isVisible: isAuthenticated,
        path: "/dashboard",
      },
    ];
  };

  return (
    <chakra.header id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <Image src={Logo.src} h="50px" />
        <Flex as="nav">
          {data(isAuthenticated).map(
            (item, i) =>
              item.isVisible && (
                <Link
                  as={NextLink}
                  borderRight={"solid #ffab00"}
                  _last={{ borderRight: "none" }}
                  key={i}
                  href={item.path ? item.path : ""}
                >
                  <Button
                    onClick={item.clickEvent ? item.clickEvent : () => {}}
                    variant="nav"
                    borderRadius={"none"}
                    p={"0 2rem"}
                    _hover={{ bg: "gray" }}
                  >
                    {" "}
                    {item.text}{" "}
                  </Button>
                </Link>
              )
          )}
        </Flex>
      </Flex>
    </chakra.header>
  );
}
