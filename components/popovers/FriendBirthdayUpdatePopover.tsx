import { Button, Center } from "@chakra-ui/react";
import CustomPopover from "./CustomPopover";
import { FriendBirthdayUpdateForm } from "../forms/friends";
import { useState, useContext } from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { PopoverCloseContext } from "@/contexts";
import useFriendBirthdayUpdate from "@/hooks/friends/use-friend-birthday-update";
import { BirthdayButton } from "../forms/friends/FriendBirthdayUpdateForm";

interface Props {
  state:'initial'|'patch'
  defaultDate?:string
}

export default function FriendBirthdayUpdatePopover({state, defaultDate}:Props) {
  const style = {
    bg:'#93816a',
    color:'white'
  }
  return (
    <>
      <CustomPopover
        trigger={<BirthdayButton state={state}/>}
        body={<FriendBirthdayUpdateForm  defaultDate={defaultDate}/>}
        style={style}
      />
    </>
  );
}
