import { Button, IconButton, Box } from "@chakra-ui/react";
import CustomPopover from "./CustomPopover";
import { useState } from "react";
import { EventUpdateForm } from "../forms";
import { RiSettings4Line, RiEdit2Line } from "react-icons/ri";

interface Props {
  id: string;
  name: string;
  money: number;
  icon: string;
}

export default function EventUpdatePopover({ id, name, money, icon }: Props) {
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
        body={<EventUpdateForm {...{ id, name, eventMoney:money, icon }} />}
      />
    </>
  );
}
