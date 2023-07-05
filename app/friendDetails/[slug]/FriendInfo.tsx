import {
  Flex,
  Box,
  Card,
  CardBody,
  Stack,
  VStack,
  Text,
  StackDivider,
  CloseButton,
  StatHelpText
} from "@chakra-ui/react";
import React, { useRef, useEffect, useState, useContext } from "react";
import Header from "./Header";
import { dateConvert, getYearMonthDate } from "@/utils/dates";
import { useAppSelector } from "@/redux/hooks";
import { FriendDelConfPopover, FriendBirthdayUpdatePopover } from "@/components/popovers";
import FriendNameUpdateForm from "@/components/forms/FriendNameUpdateForm";
import { BsCheck2Square } from "react-icons/bs";
import { RiEdit2Line } from "react-icons/ri";
import { FriendContext } from "@/contexts";

export default function FriendInfo() {
  const outerRef = useRef<any>();
  const innerRef = useRef<any>();
  const friend = useAppSelector((state) => state.friend).friendDetail
  const eventList = useAppSelector((state) => state.event).eventList;
  useEffect(() => {
    if (typeof innerRef.current !== "undefined") {
      outerRef.current.style.height =
        innerRef.current.offsetHeight + 32 + "px"; //32 is half of the image

    }
  }, [innerRef.current]);
  function amountCalculation(sub:string) {
    // eventList is array, sub will be paied or bePaied
    const acceptedSubs = ["paied", "bePaied"];
    let paied = 0;
    let bePaied = 0;

    eventList.forEach((e:any) => {
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
        return "#c0fafb";
      } else {
        return "#ff9393";
      }
    }
    return chack();
  };
  const nameEditConfig = {
    title:'Name :',
    iconToEdit:<RiEdit2Line color={'green'}/>,
    iconIsEditting:<BsCheck2Square color={'red'}/>,
    iconIsReady:<BsCheck2Square color={'green'}/>,
    // defaultVal:friend.name
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
          <FriendDelConfPopover/>
          </Flex>
          <CardBody w={"100%"} pt={"0.2rem"}>
            <Stack divider={<StackDivider />} spacing={{ base: "1", md: "4" }}>
              <Flex w={"100%"} justifyContent={"center"}>
                <VStack align="stretch" fontWeight={"bold"} spacing={"0.5rem"}>
                  <Flex alignItems={"center"}>
                    <FriendNameUpdateForm {...nameEditConfig} />
                    <Box w={"50%"} h={"100%"}>
                      <Flex alignItems={"center"} position={"absolute"}>
                      </Flex>
                    </Box>
                  </Flex>
                    {friend.birthday && (
                      <Text>
                      <>Birthday : {getYearMonthDate(friend.birthday)}</>
                      </Text>
                    )}
                  <Text>
                    Last interaction : {dateConvert(friend.last_log)}
                  </Text>
                  {!friend.birthday && (
                    <FriendBirthdayUpdatePopover/>
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
                  fontSize={"1.5rem"}
                >
                  <Text>TOTAL</Text>
                  <Text m={"0 0.2rem"}>:</Text>
                  <Text>${friend.sum}</Text>
                </Flex>
                <Flex w={"100%"} mt={{ md: "1rem" }}>
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
