import { Box, Flex } from "@chakra-ui/react";
interface Props {
  provider: "google" | "amazon";
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
    bg:
      provider === "google"
        ? "#4285F4"
        : "linear-gradient(to bottom, #fee5a1, #f5c645)",
    border: provider === "google" ? "solid transparent" : "solid #b38b22",
  };
  return (
    <Flex
      {...variants}
      onClick={clickEvent}
      w={"260px"}
      mt={"0.3rem"}
      alignItems={"center"}
      fontSize={"1.2rem"}
      fontFamily={'"Roboto" sans-serif'}
      transition={"500ms"}
      cursor={"pointer"}
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      _hover={{
        filter: "brightness(110%)",
        border: provider === "google" ? "solid #4285F4" : "solid #c39a2b",
      }}
    >
      <Flex
        bg={provider === "google" ? "white" : ""}
        color={"black"}
        alignItems={"center"}
        p={"0.6rem"}
        fontSize={"1.6rem"}
      >
        {icon}
      </Flex>
      <Box
        w={"100%"}
        color={provider === "google" ? "white" : "black"}
        p={"0.5rem 0.8rem"}
      >
        {text}
      </Box>
    </Flex>
  );
}
