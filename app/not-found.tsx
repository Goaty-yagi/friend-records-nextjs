"use client";

import {
  Text,
  Heading,
  Divider,
  Center,
  Button,
  Image
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Logo from "@/public/logo.svg";

export default function NotFound() {
  const router = useRouter();
  return (
    <Center w={'100%'} mt={"6rem"} alignItems={'center'} position={'relative'} left={"-1rem"}>
      <Image as={Image} src={Logo.src} alt="logo" height="50px" m={"0 0.8rem"} />
      <Center flexDirection={"column"} alignItems={"center"}>
        <Heading as="h1">Not found</Heading>
        <Text>The page you&apos;re looking for was not found.</Text>
        <Divider my={6} />
        <Button
          onClick={() => {
            router.push("/");
          }}
          colorScheme="teal"
        >
          Return to home
        </Button>
      </Center>
    </Center>
  );
}
