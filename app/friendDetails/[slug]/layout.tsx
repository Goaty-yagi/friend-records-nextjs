"use client";

import { useEffect, useState } from "react";
import { useGetFriendDetailMutation } from "@/redux/features/friendApiSlice";
import { FriendContext } from "@/contexts/index";
import FriendInfo from "./FriendInfo";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setFriendId, setFriendDetail } from "@/redux/features/friendSlice";
import { setEventList as setEvents } from "@/redux/features/eventSlice";
import { EventCreatePopover } from "@/components/popovers";
import { Flex } from "@chakra-ui/react";
import { Spinner } from "@/components/common";
import { EventProps } from "@/redux/features/eventApiSlice";
import { store } from "@/redux/store";
import EventList from "./eventList";

const pathname =window.location.pathname
    console.log(pathname.split('/').join('/') )
console.log(store.getState(),window.location)
interface Props {
  params: {
    slug: string;
    children?:React.ReactNode
  };
}
interface Events {
  name: string;
  friend: string;
  money: number;
  created_on: string;
  icon: string;
}

export default function Layout({ params }: Props) {
  const { slug } = params;
  const dispatch = useAppDispatch();
  const [friend, setFriend] = useState({});
  const eventList = useAppSelector((state) => state.event).eventList;
  const [isLoading, setIsLoading] = useState(true);
  const [getFriendDetail, {}] = useGetFriendDetailMutation();
  useEffect(() => {
    // setFriend({});
    dispatch(setFriendId(slug));
    if(!eventList.length) {
      getFriendDetail(slug)
      .unwrap()
      .then((res) => {
        dispatch(setEvents(res.event));
        dispatch(setFriendDetail(res));
        setFriend(res);
      })
      .catch((e) => {
        // do something
      });
    }
    return setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <Flex h={"90vh"} alignItems={"center"}>
            <Spinner size={"lg"} />
          </Flex>
        </>
      ) : (
        <>
          <FriendContext.Provider
            value={{ slug, friend, eventList, setFriend }}
          >
            <FriendInfo />
            <Flex
              h={"100%"}
              mt={"1rem"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <EventCreatePopover />
              <EventList />
            </Flex>
          </FriendContext.Provider>
        </>
      )}
    </>
  );
}