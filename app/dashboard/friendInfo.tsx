"use client";

import {
  Box,
  Flex,
  Text,
  StackDivider,
  Stack,
  Skeleton,
  Avatar,
} from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";
{
}
import { CustomField } from "@/components/fields";
import { MdCalendarMonth } from "react-icons/md";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { FaPeopleArrows } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import Theme from "@/components/utils/Theme";
import { useAppSelector } from "@/redux/hooks";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { getAvaterObj } from "@/components/avatarsAndIcons";
import { monthColors } from "@/styles/colors";
import Image from "next/legacy/image";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/contexts";
import { AvatarUpdatePopover, LogoutConfPopover } from "@/components/popovers";
import { useDispatch } from "react-redux";
import { isAvatarLoadingFalse } from "@/redux/features/authSlice";
import { toast } from "react-toastify";

export default function FriendInfo() {
  const date = new Date(Date.now());
  const { data: user, isFetching, isError } = useRetrieveUserQuery();
  const { friendList } = useAppSelector((state) => state.friend);
  const { isAvatarLoading } = useAppSelector((state) => state.auth);
  const [isMounted, setIsMounted] = useState(false);
  const dispatch = useDispatch();
  const globalContext = useContext(GlobalContext);
  const { H, W, defaH } = globalContext;
  const avatarStyle = {
    alignItems: "center",
    justifyContent: "center",
    w: "96px",
    h: "96px",
    mr: "1rem",
    border: "solid gray",
    borderRadius: "50vh",
    bg: "#cfcfcf",
  };
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const MonthlyStates = {
    SPENT: "spent",
    RECEIVED: "received",
    INTERACTIONS: "interactions",
  };
  const config = [
    {
      icon: <GiPayMoney fontSize={"2rem"} color={"gray"} />,
      header: "I SPENT",
      text: "$ " + getMonthlyData(MonthlyStates.SPENT).toString(),
    },
    {
      icon: <GiReceiveMoney fontSize={"2rem"} color={"gray"} />,
      header: "I RECEIVED",
      text: "$ " + (getMonthlyData(MonthlyStates.RECEIVED) * -1).toString(),
    },
    {
      icon: <FaPeopleArrows fontSize={"2rem"} color={"gray"} />,
      header: "NUMBER OF INTERACTIONS",
      text: getMonthlyData(MonthlyStates.INTERACTIONS).toString(),
    },
  ];
  useEffect(() => {
    if (!isMounted) {
      return setIsMounted(true);
    }
    if (!isFetching && !isError && isAvatarLoading) {
      toast.success("Syccessfully updated!");
      dispatch(isAvatarLoadingFalse());
    }
  }, [isFetching]);

  function getMonthlyData(key: string) {
    //here should be usereducer
    if (friendList) {
      let sumOfSpent = 0;
      let sumOfReceive = 0;
      let sumIntractions = 0;
      friendList.forEach((e) => {
        for (let i = 0; i < e.event.length; i++) {
          const EDate = new Date(e.event[i].created_on);
          if (EDate.getMonth() === date.getMonth()) {
            sumOfSpent += e.event[i].money > 0 ? e.event[i].money : 0;
            sumOfReceive += e.event[i].money < 0 ? e.event[i].money : 0;
            sumIntractions += 1;
          }
        }
      });
      switch (key) {
        case MonthlyStates.SPENT:
          return sumOfSpent;
        case MonthlyStates.RECEIVED:
          return sumOfReceive;
        case MonthlyStates.INTERACTIONS:
          return sumIntractions;
      }
    }
    return 0;
  }
  function innerHeightCalculation() {
    return H > 720;
  }
  if (user) {
    return (
      <>
        <Flex
          position={"relative"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Box zIndex={1}>
            <Flex
              {...avatarStyle}
              bg={"pink"}
              position={"absolute"}
              justifyContent={"center"}
              alignItems={"center"}
            />
            <Flex
              as={
                isAvatarLoading || (isAvatarLoading && isFetching)
                  ? Skeleton
                  : Flex
              }
              position={"relative"}
              {...avatarStyle}
            >
              {!user.avatar ? (
                <>
                  <Avatar size={"xl"} />
                </>
              ) : (
                <>
                  <ChakraImage
                    as={Image}
                    src={getAvaterObj(user.avatar)}
                    srcSet={`${user.avatar} x2`}
                    layout="fill"
                    alt={"avatar"}
                  />
                </>
              )}
              <AvatarUpdatePopover state={"user"} />
            </Flex>
          </Box>
          <Text color={"gray"} fontFamily={'"Gill Sans", sans-serif'}>
            {user.username}
          </Text>
          <Flex
            mt={"1rem"}
            textAlign={"left"}
            w={"100%"}
            fontWeight={"bold"}
            color={"gray"}
            fontSize={W > 400 ? "1.5rem" : "1.4rem"}
            alignItems={"center"}
          >
            <Text>Monthly Info</Text>
            <Flex alignItems={"center"} color={monthColors[date.getMonth()]}>
              (<MdCalendarMonth />
              {monthNames[date.getMonth()]})
            </Flex>
          </Flex>
          <Stack
            mt={"0.5rem"}
            spacing="4px"
            fontFamily={'"Gill Sans", sans-serif'}
            divider={<StackDivider />}
          >
            <Stack spacing="4px" m={"0.5rem 0"}>
              {config.map((each, index) => (
                <CustomField
                  key={index}
                  icon={each.icon}
                  header={each.header}
                  text={each.text}
                />
              ))}
            </Stack>
            <Box mt={"1rem"}>
              <CustomField
                icon={<HiUsers fontSize={"2rem"} color={"gray"} />}
                header={"NUMBER OF FRIENDS"}
                text={friendList.length.toString()}
              />
            </Box>
          </Stack>
          <Box
            position={innerHeightCalculation() ? "relative" : "absolute"}
            top={innerHeightCalculation() ? 0 : "80px"}
            h={"30px"}
            w={"100%"}
            m={"0.5rem 0"}
          >
            <Box position={"absolute"} top={1} right={0}>
              <LogoutConfPopover />
            </Box>
            <Box position={"absolute"} left={0}>
              <Theme />
            </Box>
          </Box>
        </Flex>
      </>
    );
  } else {
    return <></>;
  }
}
