import { FriendList, Wrapper, NoFriend } from "./index";
import { useAppSelector } from "@/redux/hooks";
import { FriendCreatePopover } from "../popovers";
import { useGetFriendListMutation } from "@/redux/features/friendApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setFriends } from "@/redux/features/friendSlice";
import { Spinner } from "../common";
import { useEffect } from "react";


export default function Layout() {
  const { friendList } = useAppSelector((state) => state.friend);
  const [getFriendList, { data: isLoading }] = useGetFriendListMutation();
  const dispatch = useAppDispatch();

  const handleFriendList = () => {
    getFriendList(undefined)
      .unwrap()
      .then((res) => {
        console.log("res", res);
        dispatch(setFriends(res));
      });
  };

  useEffect(() => {
    handleFriendList();
  }, []);
  return (
    <>
      {/* {isLoading ? (
        <Spinner />
      ) : ( */}
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
      {/* )} */}
    </>
  );
}
