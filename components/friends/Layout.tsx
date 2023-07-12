import { FriendList, Wrapper, NoFriend } from "./index";
import { useAppSelector } from "@/redux/hooks";
import { FriendCreatePopover } from "../popovers";
import { useGetFriendListMutation } from "@/redux/features/friendApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setFriends } from "@/redux/features/friendSlice";
import { Spinner } from "../common";
import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";

export default function Layout() {
  const { friendList } = useAppSelector((state) => state.friend);
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

  useEffect(() => {
    if(!friendList.length) {
      handleFriendList();
    }
  }, []);
  return (
    <>
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
    </>
  );
}
