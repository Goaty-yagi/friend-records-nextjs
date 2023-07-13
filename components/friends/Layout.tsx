import { FriendList, Wrapper, NoFriend } from "./index";
import { useAppSelector } from "@/redux/hooks";
import { FriendCreatePopover } from "../popovers";
import { useGetFriendListMutation } from "@/redux/features/friendApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setFriends } from "@/redux/features/friendSlice";
import { Spinner } from "../common";
import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { FriendContext } from "@/contexts";

export default function Layout() {
  const { friendList } = useAppSelector((state) => state.friend);
  const [friendsArray, setFriendsArray] = useState<any>([]);

  const [getFriendList, { data: isLoading, isSuccess }] =
    useGetFriendListMutation();
  const dispatch = useAppDispatch();

  const handleFriendList = () => {
    getFriendList(undefined)
      .unwrap()
      .then((res) => {
        dispatch(setFriends(res));
      });
  };
  function dateCalculation(date: string) {
    const nowDate = new Date();
    const last_log = new Date(date);
    const diffMilliSec = nowDate.getTime() - last_log.getTime();
    const diffDays = diffMilliSec / 1000 / 60 / 60 / 24;
    return diffDays;
  }
  function birthDateCalculation(date: string) {
    if (date) {
      const nowDate = new Date();
      const bDate = new Date(date);
      const diffMonth = nowDate.getMonth() - bDate.getMonth();
      const diffDate = nowDate.getDate() - bDate.getDate();
      if (diffMonth === 0) {
        if (diffDate <= 0) {
          return { alert: true, diffDate: diffDate };
        }
      } else if (diffMonth === -1 || diffMonth === 11) {
        if (diffDate >= 0) {
          return { alert: true, diffDate: diffDate };
        }
      }
    }
  }
  useEffect(() => {
    if(!friendList.length) {
      handleFriendList();
    } else {
      let chachUpArray: any = [];
      const dateOrderedArray = friendList.filter((d) => {
        const birthdayObj = birthDateCalculation(d.birthday);
        if (dateCalculation(d.last_log) >= 30) {
          chachUpArray.unshift(d);
        } else if (typeof birthdayObj !== "undefined") {
          chachUpArray.unshift(d);
        } else {
          return d;
        }
      });
      const orderedArray = chachUpArray.concat(dateOrderedArray);
      setFriendsArray([...orderedArray]);
    }
  }, []);
  return (
    <>
    <FriendContext.Provider value={{friendsArray, setFriendsArray}}>
      {!isSuccess&&!friendList.length ? (
        <Flex h={'100vh'} alignItems={'center'}>
          <Spinner size={"lg"} />
        </Flex>
      ) : (
        <Wrapper>
          <>
            {friendList.length ? (
              <>
                <FriendCreatePopover />
                <FriendList />
              </>
            ) : (
              <>
                <NoFriend />
              </>
            )}
          </>
        </Wrapper>
      )}
      </FriendContext.Provider>
    </>
  );
}
