import {
  Flex,
  Box,
  Card,
  CardBody,
  Stack,
  VStack,
  Text,
  StackDivider,
} from "@chakra-ui/react";
import React, { useRef, useEffect, useState, useContext } from "react";
import Header from "./Header";
import { dateConvert, getYearMonthDate } from "@/utils/dates";
import { useAppSelector } from "@/redux/hooks";
import {
  FriendDelConfPopover,
  FriendBirthdayUpdatePopover,
} from "@/components/popovers";
import FriendNameUpdateForm from "@/components/forms/friends/FriendNameUpdateForm";
import { BsCheck2Square, BsFileX } from "react-icons/bs";
import { RiEdit2Line } from "react-icons/ri";
import { GlobalContext } from "@/contexts";

export default function FriendInfo() {
  const outerRef = useRef<any>();
  const innerRef = useRef<any>();
  const friend = useAppSelector((state) => state.friend).friendDetail;
  const eventList = useAppSelector((state) => state.event).eventList;
  const globalContext = useContext(GlobalContext);
  const { H, W, defaH } = globalContext;
  useEffect(() => {
    function setFriendInfoHeight() {
      if (typeof innerRef.current !== "undefined") {
        const halfImage = 32;
        const border = 4;
        outerRef.current.style.height =
          innerRef.current.offsetHeight + halfImage + border + "px";
      }
    }
    setFriendInfoHeight()
    window.addEventListener('resize', setFriendInfoHeight);
    return () => window.removeEventListener('resize', setFriendInfoHeight);
  }, []);
  function amountCalculation(sub: string) {
    // eventList is array, sub will be paied or bePaied
    const acceptedSubs = ["paied", "bePaied"];
    let paied = 0;
    let bePaied = 0;

    eventList.forEach((e: any) => {
      const money = Number(e.money);
      paied += money > 0 ? money : 0;
      bePaied += money < 0 ? money : 0;
    });
    if (acceptedSubs.includes(sub)) {
      return sub === "paied" ? paied : bePaied * -1;
    } else {
      throw "sub must be paied or bePaied";
    }
  }
  const totalAmountColor = (amount: number) => {
    function chack() {
      if (amount === 0) {
        return "";
      } else if (amount > 0) {
        return "#18c7ca";
      } else {
        return "#ff9393";
      }
    }
    return chack();
  };
  const nameEditConfig = {
    title: "Name :",
    iconToEdit: <RiEdit2Line />,
    iconIsEditting: <BsCheck2Square color={"red"} />,
    iconIsReady: <BsCheck2Square color={"green"} />,
    defaultVal: friend.name,
  };
  function createDateObj(date: string) {
    return new Date(date);
  }
  return (
    <>
      <Header innerRef={innerRef} outerRef={outerRef}>
        <Card
          color={"gray"}
          border={"solid #898686"}
          w={"100%"}
          overflow={"hidden"}
          position={"relative"}
        >
          <Flex justifyContent={"flex-end"}>
            <FriendDelConfPopover />
          </Flex>
          <CardBody w={"100%"} pt={"0.5px"}>
            <Stack
              divider={<StackDivider />}
              spacing={H < defaH || W < 600 ? 1 : 4}
            >
              <Flex w={"100%"} justifyContent={"center"}>
                <VStack
                  align="stretch"
                  fontWeight={"bold"}
                  spacing={H < defaH || W < 600 ? 0 : "0.5rem"}
                >
                  <Flex alignItems={"center"}>
                    <FriendNameUpdateForm {...nameEditConfig} />
                    <Box w={"50%"} h={"100%"}>
                      <Flex alignItems={"center"} position={"absolute"}></Flex>
                    </Box>
                  </Flex>
                  {friend.birthday && (
                    <Flex alignItems={"center"}>
                      <>Birthday : {getYearMonthDate(friend.birthday)}</>
                      <FriendBirthdayUpdatePopover
                        state={"patch"}
                        defaultDate={friend.birthday}
                      />
                    </Flex>
                  )}
                  <Text>Last Interaction : {dateConvert(friend.last_log)}</Text>
                  {!friend.birthday && (
                    <FriendBirthdayUpdatePopover state={"initial"} />
                  )}
                </VStack>
              </Flex>
              <Flex
                alignItems={"center"}
                fontWeight={"bold"}
                flexDirection={"column"}
              >
                <Flex
                  color={totalAmountColor(friend.sum)}
                  alignItems={"center"}
                  fontSize={{ base: "1.2rem", md: "1.5rem" }}
                >
                  <Text>TOTAL</Text>
                  <Text m={"0 0.2rem"}>:</Text>
                  <Text>${friend.sum}</Text>
                </Flex>
                <Flex w={"100%"}>
                  <Box textAlign={"center"} flexBasis={"50%"}>
                    <Text color={"#008dff"}>I Paid</Text>
                    <Text>${amountCalculation("paied")}</Text>
                  </Box>
                  <Box textAlign={"center"} flexBasis={"50%"}>
                    <Text color={"#ff4d76"}>They Paid</Text>
                    <Text>${amountCalculation("bePaied")}</Text>
                  </Box>
                </Flex>
              </Flex>
            </Stack>
          </CardBody>
        </Card>
      </Header>
    </>
  );
}
