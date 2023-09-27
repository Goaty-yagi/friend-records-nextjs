"use client";

import { useEffect, useState } from "react";
import { useGetFriendDetailMutation } from "@/redux/features/friendApiSlice";
import { FriendContext } from "@/contexts/index";
import FriendInfo from "./FriendInfo";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setFriendId, setFriendDetail } from "@/redux/features/friendSlice";
import { setEventList as setEvents } from "@/redux/features/eventSlice";
import { EventCreatePopover } from "@/components/popovers";
import { Flex, Show } from "@chakra-ui/react";
import { Spinner } from "@/components/common";
import { EventCreateModal } from "@/components/modals";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { PrivateRouterWithoutAuth } from "@/components/common/PrivateRouter";
import EventList from "./eventList";

interface Props {
  params: {
    slug: string;
    children?: React.ReactNode;
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
  const router = useRouter()
  const [getFriendDetail, {}] = useGetFriendDetailMutation();
  useEffect(() => {
    setFriend({});
    dispatch(setFriendId(slug));
    getFriendDetail(slug)
      .unwrap()
      .then((res) => {
        dispatch(setEvents(res.event));
        dispatch(setFriendDetail(res));
        setFriend(res);
        setIsLoading(false);
      })
      .catch(() => {
				toast.error('Failed to get friend detail');
        router.push('/')
      });
  }, []);
  return (
    <>
      <PrivateRouterWithoutAuth>
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
                mt={"0.3rem"}
                mb={'1rem'}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Show breakpoint="(min-width: 600px)">
                  <EventCreatePopover />
                </Show>
                <Show breakpoint="(max-width: 599px)">
                  <EventCreateModal />
                </Show>
                <EventList />
              </Flex>
            </FriendContext.Provider>
          </>
        )}
      </PrivateRouterWithoutAuth>
    </>
  );
}
