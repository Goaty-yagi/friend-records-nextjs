import Link from "next/link";
import React, { useState, useEffect, useContext, ChangeEvent, useMemo } from "react";
import { Flex, Text, Box, VStack, DarkMode } from "@chakra-ui/react";
import Image from "next/legacy/image";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { dateConvert } from "@/utils/dates";
import { getAvaterObj } from "../avatarsAndIcons";
import DateAlert from "./dateAlert";
import BirthdayAlert from "./birthdayAlert";
import { useAppSelector } from "@/redux/hooks";
import { FriendSearch, FriendSort, MobileFriendList } from "./index";
import { FriendResponse } from "@/redux/features/friendApiSlice";
import { FriendContext, GlobalContext } from "@/contexts";
import useThemeColors from "@/hooks/use-theme-colors";

import { YScrollLimitationWrapper } from "@/components/common";

export const sortOptionStates = {
  LOW_AMOUNT: "Low Amount",
  HIGH_AMOUNT: "High Amount",
  LATEST: "Latest",
  OLDEST: "Oldest",
  Name: "Name A to Z",
  EVENT: "Event",
  // BIRTHDAY: "Birthday",
};
export default function FriendList() {
  const { friendList } = useAppSelector((state) => state.friend);
  const { friendsArray, setFriendsArray, initialOrderChange } = useContext(FriendContext);
  const globalContext = useContext(GlobalContext);
  const { H, W, defaH } = globalContext;
  useEffect(() => {
    initialOrderChange()
  },[])

  const filterAndSort = useMemo(() => {
    return (queryType: string, query?: string) => {
      switch (queryType) {
        case "search":
          return setFriendsArray([
            ...friendList.filter((f: any) => {
              return f.name.includes(query);
            }),
          ]);
        case sortOptionStates.HIGH_AMOUNT:
          return setFriendsArray([
            ...friendsArray.sort(
              (a: FriendResponse, b: FriendResponse) => b.sum - a.sum
            ),
          ]);
        case sortOptionStates.EVENT:
          return setFriendsArray([
            ...friendsArray.sort(
              (a: FriendResponse, b: FriendResponse) =>
                b.event_length - a.event_length
            ),
          ]);
        case sortOptionStates.LOW_AMOUNT:
          return setFriendsArray([
            ...friendsArray.sort(
              (a: FriendResponse, b: FriendResponse) => a.sum - b.sum
            ),
          ]);
        case sortOptionStates.LATEST:
          return setFriendsArray([
            ...friendsArray.sort(
              (a: FriendResponse, b: FriendResponse) =>
                new Date(b.last_log).getTime() - new Date(a.last_log).getTime()
            ),
          ]);
        case sortOptionStates.OLDEST:
          return setFriendsArray([
            ...friendsArray.sort(
              (a: FriendResponse, b: FriendResponse) =>
                new Date(a.last_log).getTime() - new Date(b.last_log).getTime()
            ),
          ]);

        case sortOptionStates.Name:
          return setFriendsArray([
            ...friendsArray.sort((a: FriendResponse, b: FriendResponse) => {
              if (a.name > b.name) {
                return 1;
              } else {
                return -1;
              }
            }),
          ]);
      }
    };
  }, [friendsArray]);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    filterAndSort("search", event.target.value);
  }
  function onClick(event: any) {
    filterAndSort(event);
  }

  function spentOrReceive(amount: number) {
    return amount >= 0 ? "I owe them" : "They owe me";
  }
  const plusTheme = useThemeColors('plus-text').theme
  const minusTheme = useThemeColors('minus-text').theme
  return (
    <FriendContext.Provider value={{ friendsArray, onChange, onClick }}>
      <FriendSearch />
      {friendList.length && (
        <>
          <Flex w={"100%"} mb={"0.5rem"} justifyContent={"flex-end"}>
            <FriendSort />
          </Flex>
          <YScrollLimitationWrapper isLimited={H > 550} limitedStyle={{mb:'36px'}}>
            {friendsArray.map((f: any, index: number) => (
              <Card w={"100%"} key={index} mb={"0.5rem"} transition={'300ms'} _hover={{'bg':'gray.600'}}>
                <Flex
                  fontSize={{ base: "0.7rem", sm: "1rem" }}
                  position={"absolute"}
                  flexDirection={"column"}
                  right={0}
                >
                  <BirthdayAlert date={f.birthday} />
                  <DateAlert date={f.last_log} />
                </Flex>
                <Link href={{pathname:"friendDetails/" + f.id, query: { name:f.name }}}  scroll={true}>
                  <CardBody >
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
                          <Image src={getAvaterObj(f.avatar)} layout="fill" />
                        )}
                        <Box position={"absolute"} w={"150%"} bottom={-4}>
                          <Text
                            lineHeight={"1rem"}
                            fontWeight={"bold"}
                            textAlign={"center"}
                            fontSize={"0.8rem"}
                          >
                            {f.name.slice(0, 6)}
                            {f.name.length > 6 ? ".." : ""}
                          </Text>
                        </Box>
                      </Flex>
                      <MobileFriendList
                        friend={f}
                        spentOrReceive={spentOrReceive}
                      />
                      <VStack
                        display={{ base: "none", md: "flex" }}
                        align="stretch"
                      >
                        <Flex
                          color={f.sum >= 0 ? plusTheme : minusTheme}
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
                          Last Interaction<Text m={"0 0.2em"}>:</Text>
                          {dateConvert(f.last_log)}
                        </Flex>
                      </VStack>
                    </Flex>
                  </CardBody>
                </Link>
              </Card>
            ))}
          </YScrollLimitationWrapper>
        </>
      )}
    </FriendContext.Provider>
  );
}
