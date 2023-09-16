import { Box, Flex } from "@chakra-ui/react";
interface Props {
  provider:string
  icon: React.ReactNode;
  text: string;
  event:any
  hasLeft?:boolean
  style:{}
}

export default function SocialButton({
  provider,
  icon,
  text,
  event,
  hasLeft=false,
  style
}: Props) {
  console.log( event)
  const defaultStyle = {
    border:'0.5px solid gray',
    bg:'white',
    color:'black',
    borderRadius:'5px',
    fontFamily:'',
    _hover:{
      bg: "#eaeaea",
    }
  }
  return (
    <Flex
      {...defaultStyle}
      onClick={event}
      w={"260px"}
      alignItems={"center"}
      fontSize={"1.2rem"}
      transition={"500ms"}
      cursor={"pointer"}
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
    >
      <Flex
        // bg={hasLeft? "white" : ""} // for custom style
        alignItems={"center"}
        p={"0.6rem"}
        fontSize={"1.6rem"}
      >
        {icon}
      </Flex>
      <Box
        w={"100%"}
        p={"0.5rem 0.8rem"}
      >
        {text}
      </Box>
    </Flex>
  );
}
