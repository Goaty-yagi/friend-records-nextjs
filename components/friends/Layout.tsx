import { FriendList, Wrapper, NoFriend, FriendCreateButton } from "./index";
import { useAppSelector } from "@/redux/hooks";

export default function Layout() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <>
      <Wrapper>
        {isAuthenticated ? (
          <>
            <FriendCreateButton />
            <FriendList />
          </>
        ) : (
          <>
            <NoFriend />
          </>
        )}
      </Wrapper>
    </>
  );
}
