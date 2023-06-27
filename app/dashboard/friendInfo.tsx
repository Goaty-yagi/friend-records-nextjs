"use client";

import {
  Box,
  Flex,
  Text,
  Heading,
  StackDivider,
  Stack,
} from "@chakra-ui/react";
import { CustomField } from "@/components/fields";
import { MdCalendarMonth } from "react-icons/md";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { FaPeopleArrows } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import Theme from "@/components/utils/Theme";
import Logout from "./logout";

export default function FriendInfo() {
  const date = new Date(Date.now());
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
    },
    {
      icon: <GiReceiveMoney fontSize={"2rem"} color={"gray"} />,
      header: "I RECEIVED",
    },
    {
      icon: <FaPeopleArrows fontSize={"2rem"} color={"gray"} />,
      header: "NUMBER OF INTERACTIONS",
    },
  ];
  // useEffect(() => {
  //   if (context.friends) {
  //   }
  // }, []);
  interface Props {
    key: string;
  }
  //   function getMonthlyData({ key }: Props) {
  //     console.log(key)
  //     // if (context.friends) {
  //     //   let sumOfSpent = 0;
  //     //   let sumOfReceive = 0;
  //     //   let sumIntractions = 0;
  //     //   context.friends.forEach((e) => {
  //     //     for (let i = 0; i < e.event.length; i++) {
  //     //       const EDate = new Date(e.event[i].created_on);
  //     //       if (EDate.getMonth() === date.getMonth()) {
  //     //         sumOfSpent += e.event[i].money > 0 ? e.event[i].money : 0;
  //     //         sumOfReceive += e.event[i].money < 0 ? e.event[i].money : 0;
  //     //         sumIntractions += 1;
  //     //       }
  //     //     }
  //     //   });
  //     //   switch (key) {
  //     //     case MonthlyStates.SPENT:
  //     //       return sumOfSpent;
  //     //     case MonthlyStates.RECEIVED:
  //     //       return sumOfReceive;
  //     //     case MonthlyStates.INTERACTIONS:
  //     //       return sumIntractions;
  //     //   }
  //     // }
  //     return "";
  //   }
  return (
    <>
      <Flex
        position={"relative"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        {/* <EditIcon /> */}
        <Text color={"gray"} fontFamily={'"Gill Sans", sans-serif'}>
          {/* {user.username} */}
          username
        </Text>
        <Flex
          mt={"1rem"}
          textAlign={"left"}
          w={"100%"}
          fontWeight={"bold"}
          color={"gray"}
          fontSize={"1.5rem"}
          alignItems={"center"}
        >
          <Text>Monthly Info</Text>
          <Flex
            alignItems={"center"}
            //   color={monthColors[date.getMonth()]}
          >
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
              <CustomField key={index} icon={each.icon} header={each.header} />
            ))}
          </Stack>
          <Box mt={"1rem"}>
            <CustomField
              icon={<HiUsers fontSize={"2rem"} color={"gray"} />}
              header={"NUMBER OF FRIENDS"}
              //   text={context.friends.length}
            />
          </Box>
        </Stack>
        <Box position={"relative"} h={"30px"} w={"100%"} m={"0.5rem 0"}>
          <Box position={"absolute"} right={0}>
            <Logout />
          </Box>
          <Box position={"absolute"} left={0}>
            <Theme />
          </Box>
        </Box>
      </Flex>
    </>
  );
}
