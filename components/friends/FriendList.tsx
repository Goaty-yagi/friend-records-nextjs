import Link from "next/link";
import React, { useState, useEffect, useRef, useContext } from "react";
import {
  Flex,
  Text,
  Box,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputLeftElement,
  VStack,
  Image,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
// import FriendCreate from "./friendCreate";
import { FaSearchPlus } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { dateConvert } from "@/utils/dates";
// import { getAvaterObj } from "./iconsSlides/avatars";
// import MobileList from "./friendLists/mobileList";
import { wrap } from "popmotion";
import { useFriendListMutation } from "@/redux/features/friendApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import DateAlert from "./dateAlert";
import BirthdayAlert from "./birthdayAlert";

const sortOptionStates = {
  LOW_AMOUNT: "Low Amount",
  HIGH_AMOUNT: "High Amount",
  LATEST: "Latest",
  OLDEST: "Oldest",
  Name: "Name A to Z",
  EVENT: "Event",
  // BIRTHDAY: "Birthday",
};
// function Wrapper({children}:{children:React.ReactNode}) {
//   const [wrapperHeight, setWrapperHeight] = useState(0);
//   const [innerHeight, setInnerHeight] = useState(0);
//   const [friends, setFriends] = useState();
//   const [friendList, { data: events, isLoading }] = useFriendListMutation();
//   const dispatch = useAppDispatch();
//   const ref = useRef();
//   //   useEffect(() => {
//   //     if (typeof window !== "undefined") {
//   //       setWrapperHeight(ref.current.offsetHeight);
//   //       setInnerHeight(window.innerHeight - 112 - 16); // 112 is navber height
//   //     }
//   //   }, [window.innerHeight]);
//   const handleFriendList = () => {
//     friendList(undefined)
//       .unwrap()
//       .then((res) => {
//         console.log('RES',res)
//       });
//   };
//   useEffect(() => {
//     handleFriendList()
//   }, []);

//   }
//   return (
//     <Flex
//       w={"100%"}
//       h={{ base: "calc(100vh - 44px)", md: "auto" }}
//       minH={"200px"}
//       maxH={{ md: innerHeight }}
//       overflowY={"scroll"}
//       p={{ base: "0.3rem", md: "1rem" }}
//       alignItems={"center"}
//       flexDirection={"column"}
//       background={"rgb(255 191 220 / 42%)"}
//       border={"solid #a4bded"}
//       ref={ref}
//     >
//       {/* {image} */}
//       <Box mt={"1rem"}>
//       </Box>
//       {/* {children} */}
//     </Flex>
//   );
// }



interface Events {
  name: string;
  friend: number;
  money: number;
  created_on: string;
  icon: string;
}
interface FriendResponse {
  id: string;
  name: string;
  user: string;
  sum: number;
  birthday: string;
  thumbnail: string;
  avatar: string;
  last_log: string;
  created_on: string;
  event: Events[];
  event_length: number;
}

export default function FriendList() {
  const [friendList, { data: events, isLoading }] = useFriendListMutation();
  const [friends, setFriends] = useState<FriendResponse[]>([]);
  const handleFriendList = () => {
    friendList(undefined)
      .unwrap()
      .then((res) => {
        setFriends(res);
      });
  };
  useEffect(() => {
    handleFriendList();
  }, []);
  const avatarProp = {
    border: "solid red",
  };
  //   useEffect(() => {
  //     if (context.friends.length) {
  //       const chachUpArray = [];
  //       const dateOrderedArray = context.friends.filter((d) => {
  //         const birthdayObj = birthDateCalculation(d.birthday);
  //         if (dateCalculation(d.last_log) >= 30) {
  //           chachUpArray.unshift(d);
  //         } else if (typeof birthdayObj !== "undefined") {
  //           chachUpArray.unshift(d);
  //         } else {
  //           return d;
  //         }
  //       });
  //       const orderedArray = chachUpArray.concat(dateOrderedArray);
  //       setSearchFriend([...orderedArray]);
  //       setMounted(true);
  //     }
  //   }, []);

  
  function spentOrReceive(amount:number) {
    return amount >= 0 ? "I owe them" : "They owe me";
  }
  return (
    <>
      {/* <Search
        searchFriend={searchFriend}
        setSearchFriend={setSearchFriend}
        // context={context}
      /> */}
      {friends.length && (
        <>
          <Flex w={"100%"} mb={"0.5rem"} justifyContent={"flex-end"}>
            {/* <Selector
              searchFriend={searchFriend}
              setSearchFriend={setSearchFriend}
            //   context={context}
            /> */}
          </Flex>
          {friends.map((f, index) => (
            <Card w={"100%"} key={index} mb={"0.5rem"} color={"gray"}>
              <Flex
                fontSize={{ base: "0.7rem", sm: "1rem" }}
                position={"absolute"}
                flexDirection={"column"}
                right={0}
              >
                <BirthdayAlert date={f.birthday} />
                <DateAlert date={f.last_log} />
              </Flex>
              <Link href={"friendDetails/" + f.id} scroll={false}>
                <CardBody>
                  <Flex alignItems={"center"}>
                    <Flex
                      position={"relative"}
                      justifyContent={"center"}
                      w={{ base: "50px", md: "70px" }}
                      h={{ base: "50px", md: "70px" }}
                      left={{ base: -3, sm: 0 }}
                      mr={{ base: 0, sm: "1rem" }}
                      border={"solid gray"}
                      borderRadius={"50vh"}
                      bg={"#bebebe4a"}
                    >
                      {/* {getAvaterObj(f.avatar)().icon} */}
                      <Box position={"absolute"} w={"150%"} bottom={-4}>
                        <Text
                          lineHeight={"1rem"}
                          fontWeight={"bold"}
                          textAlign={"center"}
                        >
                          {f.name.slice(0, 7)}
                          {f.name.length > 7 ? ".." : ""}
                        </Text>
                      </Box>
                    </Flex>
                    {/* <MobileList friend={f} spentOrReceive={spentOrReceive} /> */}
                    <VStack
                      display={{ base: "none", md: "flex" }}
                      align="stretch"
                    >
                      <Flex
                        color={f.sum >= 0 ? "#c0fafb" : "#ff9393"}
                        w={"100%"}
                        fontWeight={"bold"}
                      >
                        {spentOrReceive(f.sum)}
                        <Text m={"0 0.2em"}>:</Text>＄
                        {f.sum >= 0 ? f.sum : f.sum * -1}
                      </Flex>
                      <Flex w={"100%"} fontWeight={"bold"}>
                        Number of events<Text m={"0 0.2em"}>:</Text>
                        {f.event_length}
                      </Flex>
                      <Flex w={"100%"} fontWeight={"bold"}>
                        Last interaction<Text m={"0 0.2em"}>:</Text>
                        {dateConvert(f.last_log)}
                      </Flex>
                    </VStack>
                  </Flex>
                </CardBody>
              </Link>
            </Card>
          ))}
        </>
      )}
    </>
  );
}
