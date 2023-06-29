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
import { useGetFriendListMutation } from "@/redux/features/friendApiSlice";
import DateAlert from "./dateAlert";
import BirthdayAlert from "./birthdayAlert";
import { useAppDispatch } from '@/redux/hooks';
import { useAppSelector } from "@/redux/hooks";
import { setFriends, finishInitialLoad } from '@/redux/features/friendSlice';

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
  const [getFriendList, { data:  isLoading }] = useGetFriendListMutation();
  // const [friendsArray, setFriendsArray] = useState<FriendResponse[]>([]);
  const { friendList } = useAppSelector((state) => state.friend);
  const dispatch = useAppDispatch()
  const handleFriendList = () => {
    console.log("HAANFDLE")
    getFriendList(undefined)
      .unwrap()
      .then((res) => {
        console.log("res",res)
        dispatch(setFriends(res));
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
      {friendList.length && (
        <>
          <Flex w={"100%"} mb={"0.5rem"} justifyContent={"flex-end"}>
            {/* <Selector
              searchFriend={searchFriend}
              setSearchFriend={setSearchFriend}
            //   context={context}
            /> */}
          </Flex>
          {friendList.map((f, index) => (
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
