"use client";

import { useEffect, useState } from "react";
import { useGetFriendDetailMutation } from "@/redux/features/friendApiSlice";
import { FriendContext } from "@/contexts/index";
import FriendInfo from "./FriendInfo";
import { useAppDispatch } from "@/redux/hooks";
import { setFriendId } from "@/redux/features/friendSlice";
import { EventCreatePopover } from "@/components/popovers";
import { Center } from "@chakra-ui/react";

interface Props {
  params: {
    slug: string;
  };
}
interface Events {
  name: string;
  friend: number;
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
        setFriend(res);
        setEventList(res.event);
      })
      .catch((e) => {
        // do something
      });
  }, []);
  return (
    <>
      <FriendContext.Provider value={{ friend, eventList }}>
        <FriendInfo />
        <Center mt={"1rem"}>
          <EventCreatePopover />
        </Center>
      </FriendContext.Provider>
    </>
  );
}
