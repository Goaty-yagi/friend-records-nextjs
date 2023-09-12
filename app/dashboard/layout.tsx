"use client";

import { RequireAuth } from "@/components/utils";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useEffect, useState } from "react";
import { useGetFriendListMutation } from "@/redux/features/friendApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { UserContext } from "@/contexts";
import { Box } from "@chakra-ui/react";
import { Spinner } from "@/components/common";
import { PrivateRouterWithoutAuth } from "@/components/common/PrivateRouter";
import { setFriends } from "@/redux/features/friendSlice";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const { data: user } = useRetrieveUserQuery();
  const [getFriendList, { data: isLoading }] = useGetFriendListMutation();
  const dispatch = useAppDispatch();
  const [userState, setUserState] = useState({
    username: "",
    email: "",
    UID: "",
  });
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const handleFriendList = () => {
    getFriendList(undefined)
      .unwrap()
      .then((res) => {
        dispatch(setFriends(res));
      });
  };
  useEffect(() => {
    if (user) {
      Object.keys(userState).forEach((e) => {
        const index = Object.keys(user).indexOf(e);
        setUserState({ ...userState, [e]: Object.values(user)[index] });
      });
    }
    handleFriendList();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const autoResize = () => {
        setInnerHeight(window.innerHeight);
      };
      window.addEventListener("resize", autoResize);
      return () => window.removeEventListener("resize", autoResize);
    }
  }, []);

  return (
    <>
      <PrivateRouterWithoutAuth>
        {user ? (
          <>
            <RequireAuth>
              <UserContext.Provider
                value={{
                  user: userState,
                  setUser: setUserState,
                  innerHeight: innerHeight,
                }}
              >
                {children}
              </UserContext.Provider>
            </RequireAuth>
          </>
        ) : (
          <><Spinner isCentered={true}/></>
        )}
      </PrivateRouterWithoutAuth>
    </>
  );
}
