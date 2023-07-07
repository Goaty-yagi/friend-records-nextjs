"use client";

import { SvgSlider } from "@/components/avatarsAndIcons";
import { eventIcons } from "@/components/avatarsAndIcons/icons";
import { useContext, FormEvent, useEffect, useState } from "react";
import { PopoverCloseContext } from "@/contexts";
import useEventIconUpdate from "@/hooks/events/use-event-icon-update";
import { Flex, Box, Button } from "@chakra-ui/react";
import { AbstractForm } from "../index"; 

interface Props {
  id: string;
  icon: string;
}

export default function EventIconUpdateForm({ id, icon }: Props) {
  useEffect(() => {
    setEventId(id);
  }, []);
  const { isLoading, setIcon, setEventId, onSubmit } = useEventIconUpdate();
  const onClose = useContext(PopoverCloseContext);
  const [isChange, setIsChange] = useState(false);
  function customOnSubmit(event: FormEvent<HTMLFormElement>) {
    onClose();
    onSubmit(event)
  }
  return (
    <>
      <Box mt={"0.9rem"}>
        <AbstractForm onSubmit={customOnSubmit}>
        <SvgSlider defaultSvg={icon} svgArray={eventIcons} setFun={setIcon} />
        <Flex justifyContent={"flex-end"}>
          <Button mt={"0.5rem"} 
        //   isDisabled={!isChange} 
          type={"submit"}>
            Update
          </Button>
        </Flex>
        </AbstractForm>
      </Box>
    </>
  );
}
