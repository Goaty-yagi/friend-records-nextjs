import { useRef, useState, useEffect, useContext, RefObject } from "react";
import { dateConvert } from "@/utils/dates";
import { FriendContext } from "@/contexts";
import { Box, Flex, VStack, Card, CardBody, Text } from "@chakra-ui/react";
import getIconObj from "@/components/avatarsAndIcons/icons";
import Image from "next/legacy/image";
import { Event } from "@/redux/features/eventSlice";
import { useAppSelector } from "@/redux/hooks";
import NoEvent from "./noEvent";

export default function EventList() {
  const listRef = useRef() as RefObject<HTMLDivElement>;
  const [maxH, setMaxH] = useState(0);
  //   const events = useContext(FriendContext).eventList;
  const eventList = useAppSelector((state) => state.event).eventList;
  console.log("EVE", eventList);
  useEffect(() => {
    if (listRef.current) {
      const lisrect = listRef?.current.getBoundingClientRect();
      setMaxH(window.innerHeight - lisrect.top - 48);
    }
  }, []);
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
    <Box
      w={"99%"}
      fontWeight={"bold"}
      ref={listRef}
      maxH={maxH}
      overflowY={eventList.length > 1 ? "scroll" : "auto"}
      overflowX={eventList.length > 1 ? "hidden" : "auto"}
    >
      {eventList.length ? (
        <>
          {eventList.map((e: Event, index: number) => (
            <Card
              border={"solid #ffddf9"}
              position={"relative"}
              key={index}
              mt={"0.3rem"}
              minW={"100%"}
              bg={colorHandler(e.money)}
            >
              <Flex position={"absolute"} right={0}>
                {/* <DeletePopover id={e.id} eventName={e.name} />
                  <EditPopover
                    eventName={e.name}
                    money={e.money}
                    id={e.id}
                    defaultIcon={getIconObj(e.icon)}
                  /> */}
              </Flex>
              <CardBody>
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
                  >
                    <Image src={getIconObj(e.icon)} layout="fill" />
                  </Flex>

                  <VStack align="stretch" color={"gray"}>
                    <Text>Event Name : {e.name}</Text>
                    <Text>
                      {spentOrReceive(e.money)} : $
                      {e.money >= 0 ? e.money : e.money * -1}
                    </Text>
                    <Text>Created : {dateConvert(e.created_on)}</Text>
                  </VStack>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </>
      ) : (
        <NoEvent/>
      )}
    </Box>
  );
}
