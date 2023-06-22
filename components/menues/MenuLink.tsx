import { Box, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

interface Props {
  children: React.ReactNode;
  path?: string;
  clickEvent?: (Event: any) => void;
}

export default function MenuLink({ children, path, clickEvent }: Props) {
  if (path) {
    return (
      <Link as={NextLink} href={path}>
        {children}
      </Link>
    );
  } else {
    return <Box onClick={clickEvent}>{children}</Box>;
  }
}
