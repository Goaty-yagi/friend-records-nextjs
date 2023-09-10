import { Button, Box } from "@chakra-ui/react";
import CustomPopover from "./CustomPopover";
import { FriendCreateForm } from "../forms/friends";
import useFriendCreate from "@/hooks/friends/use-friend-create";
import { useAppSelector } from "@/redux/hooks";
import { Spinner } from "../common";

export default function FriendCreatePopover() {
  const { isLoading } = useAppSelector((state) => state.friend);

  function CreateButton() {
    return (
      <Button
        bg={"#337bd3"}
        border={"solid #ffdce2"}
        color={"white"}
        size={"lg"}
        isDisabled={isLoading}
        _hover={{ bg: "#1e6595" }}
      >
        {isLoading?<><Spinner/></>:<>Cretae</>}
      </Button>
    );
  }

  return (
    <Box mt={"0.5rem"}>
      <CustomPopover trigger={<CreateButton />} body={<FriendCreateForm />} />
    </Box>
  );
}
