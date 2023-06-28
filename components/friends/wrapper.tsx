import { useState, useRef } from "react";
import { Flex, Box } from "@chakra-ui/react";

export default function Wrapper({children}:{children:React.ReactNode}) {
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const [friends, setFriends] = useState();
//   const [friendList, { data: events, isLoading }] = useFriendListMutation();
  const ref = useRef();
  //   useEffect(() => {
  //     if (typeof window !== "undefined") {
  //       setWrapperHeight(ref.current.offsetHeight);
  //       setInnerHeight(window.innerHeight - 112 - 16); // 112 is navber height
  //     }
  //   }, [window.innerHeight]);

  return (
    <Flex
      w={"100%"}
      h={{ base: "calc(100vh - 44px)", md: "auto" }}
      minH={"200px"}
      maxH={{ md: innerHeight }}
      overflowY={"scroll"}
      p={{ base: "0.3rem", md: "1rem" }}
      alignItems={"center"}
      flexDirection={"column"}
      background={"rgb(255 191 220 / 42%)"}
      border={"solid #a4bded"}
    //   ref={ref}
    >
      <Box mt={"1rem"}>
      </Box>
      {children}
    </Flex>
  );
}
