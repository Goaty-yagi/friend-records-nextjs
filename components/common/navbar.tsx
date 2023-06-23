"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";

import { Image, Flex, Button, chakra, Link, Show, Box } from "@chakra-ui/react";
import NextLink from "next/link";

import Logo from "@/public/logo.svg";
import { Menu } from "../menues";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import Theme from "../utils/Theme";

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
    return [
      {
        labelText: "Home",
        path: "/",
        isVisible: true,
        icon: <IoHomeOutline />,
      },
      {
        labelText: "Login",
        path: "/auth/login",
        isVisible: !isAuthenticated,
      },
      {
        labelText: "Register",
        path: "/auth/register",
        isVisible: !isAuthenticated,
      },
      {
        labelText: "Logout",
        isVisible: isAuthenticated,
        clickEvent: handleLogout,
      },
      {
        labelText: "Dashboard",
        isVisible: isAuthenticated,
        path: "/dashboard",
      },
    ];
  };

  return (
    <chakra.header id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <Image src={Logo.src} alt='logo' h="50px" />
        <Flex as="nav">
          <Show breakpoint="(min-width: 600px)">
            {data(isAuthenticated).map(
              (item, i) =>
                item.isVisible && (
                  <Link
                    key={i}
                    as={NextLink}
                    borderRight={"solid #ffab00"}
                    _last={{ borderRight: "none" }}
                    href={item.path ? item.path : ""}
                  >
                    <Button
                      onClick={item.clickEvent ? item.clickEvent : () => {}}
                      variant="nav"
                      borderRadius={"none"}
                      leftIcon={item.icon?item.icon:<></>}
                      p={"0 1.3rem"}
                      _hover={{ bg: "gray" }}
                    >
                      {item.labelText}
                    </Button>
                  </Link>
                )
            )}
          </Show>
          <Show breakpoint="(max-width: 599px)">
              <Menu
                config={data(isAuthenticated)}
                iconBtn={<GiHamburgerMenu />}
                btnText={"menu"}
              />
          </Show>
          <Box ml={'0.5rem'}>
          <Theme />
          </Box>
        </Flex>
      </Flex>
    </chakra.header>
  );
}
