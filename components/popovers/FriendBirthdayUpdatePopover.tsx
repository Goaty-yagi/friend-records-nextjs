import { Button, Center } from "@chakra-ui/react";
import CustomPopover from "./CustomPopover";
import { FriendBirthdayUpdateForm } from "../forms";
import { useState, useContext } from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { PopoverCloseContext } from "@/contexts";
import useFriendBirthdayUpdate from "@/hooks/friends/use-friend-birthday-update";
import { BirthdayButton } from "../forms/FriendBirthdayUpdateForm";

interface Props {
  state:'initial'|'patch'
  defaultDate?:string
}

export default function FriendCreatePopover({state, defaultDate}:Props) {
  const [close, setClose] = useState(() => {});
  const  onClose = useContext(PopoverCloseContext);
  console.log("check", onClose)
  const {
    onSubmit,
  } = useFriendBirthdayUpdate();

  console.log(close);


  return (
    <>
      <CustomPopover
        trigger={<BirthdayButton state={state}/>}
        // switchableButton={true}
        body={<FriendBirthdayUpdateForm defaultDate={defaultDate}/>}
      />
    </>
  );
}
