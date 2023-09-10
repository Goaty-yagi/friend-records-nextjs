import { Box, Flex } from "@chakra-ui/react";
interface Props {
  provider: "google" | "facebook";
  icon: React.ReactNode;
  text: string;
  clickEvent: any;
  [rest: string]: any;
}

export default function SocialButton({
  provider,
  icon,
  text,
  clickEvent,
  ...rest
}: Props) {
  const variants = {
    color: "white.200",
    bg: "red.500",
  };
  const iconVariant = {};
  return (
    <Flex
      onClick={clickEvent}
      alignItems={"center"}
      border={"solid transparent"}
      fontSize={"1.2rem"}
      fontFamily={'"Roboto" sans-serif'}
      transition={"500ms"}
      cursor={"pointer"}
      _hover={{ filter: "brightness(110%)", border: "solid #4285F4" }}
    >
      <Flex
        bg={"white"}
        color={"#4285F4"}
        alignItems={"center"}
        p={"0.6rem"}
        fontSize={"1.5rem"}
      >
        {icon}
      </Flex>
      <Box bg={"#4285F4"} p={"0.5rem 0.8rem"}>
        {text}
      </Box>
    </Flex>
  );
}
