"use client";

import { useEffect, useState } from "react";
import { useGetFriendDetailMutation } from "@/redux/features/friendApiSlice";
import { FriendContext } from "@/contexts/index";
import FriendInfo from "./FriendInfo";
import { useAppDispatch } from "@/redux/hooks";
import { setFriendId, setFriendDetail} from "@/redux/features/friendSlice";
import { setEventList as setEvents } from "@/redux/features/eventSlice";
import { EventCreatePopover } from "@/components/popovers";
import { Flex } from "@chakra-ui/react";
import EventList from "./eventList";

interface Props {
  params: {
    slug: string;
  };
}
interface Events {
  name: string;
  friend: string;
  money: number;
  created_on: string;
  icon: string;
}

export default function Page({ params }: Props) {
  const { slug } = params;
  const dispatch = useAppDispatch();
  const [friend, setFriend] = useState({});
  const [eventList, setEventList] = useState<Events[]>([]);
  const [getFriendDetail, { isLoading }] = useGetFriendDetailMutation();
  useEffect(() => {
    dispatch(setFriendId(slug));
    getFriendDetail(slug)
      .unwrap()
      .then((res) => {
        dispatch(setEvents(res.event));
        dispatch(setFriendDetail(res));
        setFriend(res);
        setEventList(res.event);
      })
      .catch((e) => {
        // do something
      });
  }, []);
  return (
    <>
      <FriendContext.Provider value={{ friend, eventList, setFriend, setEventList }}>
        <FriendInfo />
        <Flex mt={"1rem"} flexDirection={'column'} alignItems={'center'}>
          <EventCreatePopover />
          <EventList/>
        </Flex>
      </FriendContext.Provider>
    </>
  );
}
