"use client";

import { SvgSlider } from "../avatarsAndIcons";
import { eventIcons } from "../avatarsAndIcons/icons";
import { useContext, FormEvent } from "react";
import { PopoverCloseContext } from "@/contexts";
import useEventCreate from "@/hooks/events/use-event-create";
import { Flex, Box } from "@chakra-ui/react";
import { Form } from "./index";
import useFriendBirthdayUpdate from "@/hooks/friends/use-friend-birthday-update";
import { CustomNumInput , CustomSlider, CustomRadio} from "./inputFields";

export default function FriendBirthdayUpdateForm() {

  const {
    year,
    month,
    day,
    isLoading,
    onChange,
    onSubmit,
  } = useFriendBirthdayUpdate();
  const onClose = useContext(PopoverCloseContext);


  return (
    <>

    </>
  );
}
