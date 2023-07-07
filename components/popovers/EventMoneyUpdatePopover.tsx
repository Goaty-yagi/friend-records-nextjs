import { Button, IconButton, Box } from "@chakra-ui/react";
import CustomPopover from "./CustomPopover";
import { useState } from "react";
import { EventUpdateForm } from "../forms";
import { RiSettings4Line, RiEdit2Line } from "react-icons/ri";
import EventMoneyUpdateForm from '../forms/events/EventMoneyUpdateForm'

interface Props {
  money: number;
  id:string
}

export default function EventMoneyUpdatePopover({ money, id }: Props) {
  const [close, setClose] = useState(() => {});
  function CreateButton() {
    return (
      <IconButton
        aria-label="setting"
        icon={<RiSettings4Line />}
        cursor={"pointer"}
        color={"gray"}
        bg={"none"}
        m={0}
        _hover={{ bg: "none", color: "darkgray" }}
      />
    );
  }

  return (
    <>
      <CustomPopover
        trigger={<CreateButton />}
        body={<EventMoneyUpdateForm eventMoney={money} id={id}/>}
      />
    </>
  );
}
