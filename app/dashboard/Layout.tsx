"use client";

import { RequireAuth } from "@/components/utils";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useEffect, useState } from "react";
import { UserContext } from "@/contexts";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const { data: user } = useRetrieveUserQuery();
  const [userState, setUserState] = useState({
    username: "",
    email: "",
    UID: "",
  });
  useEffect(() => {
    if (user) {
		console.log("user",user)
      Object.keys(userState).forEach((e) => {
        const index = Object.keys(user).indexOf(e);
        setUserState({ ...userState, [e]: Object.values(user)[index] });
      });
    }
  }, []);

  return (
    <>
      {user ? (
        <>
          <RequireAuth>
            <UserContext.Provider
              value={{ user: userState, setUser: setUserState }}
            >
              {children}
            </UserContext.Provider>
          </RequireAuth>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
