import Link from "next/link";
import React, { useState, useEffect, useRef, useContext } from "react";
import {
  Flex,
  Text,
  Box,
  VStack,
} from "@chakra-ui/react";
import Image from "next/legacy/image";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { dateConvert } from "@/utils/dates";
import { getAvaterObj } from "../avatarsAndIcons";
import DateAlert from "./dateAlert";
import BirthdayAlert from "./birthdayAlert";
import { useAppSelector } from "@/redux/hooks";
import FriendSort from "./friendSort";
import { FriendContext } from "@/contexts";


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

  const [friendsArray, setFriendsArray] = useState<FriendResponse[]>([]);
  const { friendList } = useAppSelector((state) => state.friend);

  function dateCalculation(date:string) {
    const nowDate = new Date();
    const last_log = new Date(date);
    const diffMilliSec = nowDate.getTime() - last_log.getTime();
    const diffDays = diffMilliSec / 1000 / 60 / 60 / 24;
    return diffDays;
  }
  function birthDateCalculation(date:string) {
    if (date) {
      const nowDate = new Date();
      const bDate = new Date(date);
      const diffMonth = nowDate.getMonth() - bDate.getMonth();
      const diffDate = nowDate.getDate() - bDate.getDate();
      if (diffMonth === 0) {
        if (diffDate <= 0) {
          return { alert: true, diffDate: diffDate };
        }
      } else if (diffMonth === -1 || diffMonth === 11) {
        if (diffDate >= 0) {
          return { alert: true, diffDate: diffDate };
        }
      }
    }
  }
  const avatarProp = {
    border: "solid red",
  };
    useEffect(() => {
      if (friendList.length) {
        let chachUpArray:any = [];
        const dateOrderedArray = friendList.filter((d) => {
          const birthdayObj = birthDateCalculation(d.birthday);
          if (dateCalculation(d.last_log) >= 30) {
            chachUpArray.unshift(d);
          } else if (typeof birthdayObj !== "undefined") {
            chachUpArray.unshift(d);
          } else {
            return d;
          }
        });
        const orderedArray = chachUpArray.concat(dateOrderedArray);
        setFriendsArray([...orderedArray]);
      }
    }, []);

  
  function spentOrReceive(amount:number) {
    return amount >= 0 ? "I owe them" : "They owe me";
  }
  return (
    <FriendContext.Provider value={{friendsArray, setFriendsArray}}>
      {/* <Search
        searchFriend={searchFriend}
        setSearchFriend={setSearchFriend}
        // context={context}
      /> */}
      {friendList.length && (
        <>
          <Flex w={"100%"} mb={"0.5rem"} justifyContent={"flex-end"}>
            <FriendSort/>
          </Flex>
          {friendsArray.map((f, index) => (
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
                      {f.avatar && (
                        <Image  src={getAvaterObj(f.avatar)}  layout="fill"/>
                      )}
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
    </FriendContext.Provider>
  );
}
