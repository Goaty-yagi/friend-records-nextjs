import { Button, Center } from "@chakra-ui/react";
import CustomPopover from "./CustomPopover";
import { FriendBirthdayUpdateForm } from "../forms";
import { useState, useContext } from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { PopoverCloseContext } from "@/contexts";
import useFriendBirthdayUpdate from "@/hooks/friends/use-friend-birthday-update";
import { BirthdayButton } from "../forms/FriendBirthdayUpdateForm";

export default function FriendCreatePopover() {
  const [close, setClose] = useState(() => {});
  const isEditing = useContext(PopoverCloseContext);
  console.log(isEditing)
  const {
    onSubmit,
  } = useFriendBirthdayUpdate();

  console.log(close);

  return (
    <>
      <CustomPopover
        trigger={<BirthdayButton />}
        switchableButton={true}
        body={<FriendBirthdayUpdateForm />}
      />
    </>
  );
}
