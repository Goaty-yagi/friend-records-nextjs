import { useRef, useState, useEffect, useContext, RefObject } from "react";
import { dateConvert } from "@/utils/dates";
import { YScrollLimitationWrapper } from "@/components/common";
import {
  Flex,
  VStack,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";
import getIconObj from "@/components/avatarsAndIcons/icons";
import Image from "next/legacy/image";
import { EventProps } from "@/redux/features/eventApiSlice";
import { useAppSelector } from "@/redux/hooks";
import NoEvent from "./noEvent";
import {EventUpdateModal} from "@/components/modals";

export default function EventList() {
  const eventList = useAppSelector((state) => state.event).eventList;
  // const [windowHeight,setWindowHeight] = useState(0)
  useEffect(() => {
    // function setHeight() {
    //   setWindowHeight(window.innerHeight)
    // }

    // setHeight();
    // window.addEventListener('resize', setHeight);
    // return () => window.removeEventListener('resize', setHeight);
  },[])
  function colorHandler(amount: number) {
    if (amount > 0) {
      return "#e4feff";
    } else if (amount < 0) {
      return "#ffddea";
    } else {
      return "#ffffe0";
    }
  }
  function spentOrReceive(amount: number) {
    return amount >= 0 ? "I owe them" : "They owe me";
  }
  
  return (
    <YScrollLimitationWrapper isLimited={window.innerHeight > 550}>
      {eventList.length ? (
        <>
          {eventList.map((e: EventProps, index: number) => (
            <Card
              bgPosition={"relative"}
              border={"solid #ffddf9"}
              position={"relative"}
              key={index}
              mt={"0.3rem"}
              minW={"100%"}
              fontWeight={"bold"}
              bg={colorHandler(e.money)}
            >
              <Flex position={"absolute"} right={0}  color={'darkblue'}>
                <EventUpdateModal {...e}/>
              </Flex>
              <CardBody p={{base:2,md:6}}>
                <Flex alignItems={"center"}>
                  <Flex
                    w={"50px"}
                    h={"50px"}
                    position={"relative"}
                    border={"solid #69696B"}
                    borderRadius={"20px"}
                    boxShadow="2xl"
                    mr={"0.5rem"}
                    justifyContent={"center"}
                    bg={"#919191bf"}
                    alignItems={"center"}
                    transition={".3s"}
                  >
                    <Image src={getIconObj(e.icon)} layout="fill" />
                  </Flex>

                  <VStack align="stretch" spacing={0} color={"gray"}>
                  <Text>Event Name : {e.name}</Text>
                    <Flex alignItems={"center"}>
                      <Text>
                        {spentOrReceive(e.money)} : $
                        {e.money >= 0 ? e.money : e.money * -1}
                      </Text>
                    </Flex>
                    <Text>Created : {dateConvert(e.created_on)}</Text>
                  </VStack>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </>
      ) : (
        <NoEvent />
      )}
    </YScrollLimitationWrapper>
  );
}
