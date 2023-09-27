"use client";

import { SvgSlider } from "../../avatarsAndIcons";
import { eventIcons } from "../../avatarsAndIcons/icons";
import { useContext, useState, FormEvent, useEffect } from "react";
import useEventUpdate from "@/hooks/events/use-event-update";
import { Flex, Box, Button } from "@chakra-ui/react";
import { CustomInput } from "../inputFields";
import { AbstractForm } from "../index";
import { ModalCloseContext } from "@/contexts";
import { EventProps } from "@/redux/features/eventApiSlice";
import DeleteEvent from "@/app/friendDetails/[slug]/deleteEvent";
import { CustomNumInput, CustomSlider, CustomRadio } from "../inputFields";

interface Props {
  id: string;
  name: string;
  eventMoney: number;
  icon: string;
  friendId:string;
}

export default function EventUpdateForm({ ...event}: EventProps) {
  const format = (val: number) => `$ ` + val;
  const {id, name, icon } = event
  const eventMoney = event.money
  useEffect(() => {
    setEventId(id);
    setDefaultMoney(eventMoney);
    // });
    setFormData({
      ...formData,
      money: eventMoney >= 0 ? eventMoney : eventMoney * -1,
      eventName: name,
      whoPayed: eventMoney >= 0 ? "+" : "-",
    });
  }, []);
  const {
    eventName,
    formData,
    isLoading,
    money,
    setFormData,
    setIcon,
    setEventId,
    setDefaultMoney,
    onChange,
    onSubmit,
  } = useEventUpdate();

  const onClose = useContext(ModalCloseContext);
  const [isChange, setIsChange] = useState(false);
  function customOnsubmit(event: FormEvent<HTMLFormElement>) {
    onSubmit(event);
    onClose();
  }
  function customOnChange(e: any) {
    onChange(e);
    setIsChange(true);
  }
  function customSetIcon(e: any) {
    if(e===icon) {
      setIcon(e)
    } else {
      setIcon(e)
      setIsChange(true);
    }
  }
  const radioConfig = [
    { text: "You Payed", value: "+", checked: true },
    {
      text: "They Payed",
      value: "-",
      checked: false,
    },
  ];
  const sliderConfig = [
    {
      name: "money",
      value: money,
      max: 1000,
      min: 0,
      style: {},
    },
  ];
  const config = [
    {
      labelText: "Event Name",
      labelId: "eventName",
      placeholder: "Enter event name.",
      type: "text",
      value: eventName,
      defaultValue: name,
      required: true,
    },
  ];

  return (
    <>
      <Box mt={"-1rem"}>
        <AbstractForm onSubmit={customOnsubmit}>
          <SvgSlider defaultSvg={icon} svgArray={eventIcons} setFun={customSetIcon} />
          {config.map((e) => (
            <CustomInput {...e} key={e.labelId} onChange={customOnChange} />
          ))}
          <Box position={"relative"} top={1.5}>
            <CustomRadio
              config={radioConfig}
              name={"whoPayed"}
              defaltValue={eventMoney >= 0 ? "+" : "-"}
              setter={customOnChange}
            />
          </Box>
          <Flex maxW={{ base: "300px", md: "600px" }}>
            <CustomNumInput
              key={"input"}
              config={sliderConfig}
              onChange={customOnChange}
              hasFormat={true}
            />
            <CustomSlider
              sliderConfig={sliderConfig}
              onChange={customOnChange}
            />
          </Flex>
          <Flex mt={"1rem"} mb={'0.5rem'} justifyContent={"flex-end"}>
            <DeleteEvent {... event} />
            <Button isDisabled={!isChange} ml={'0.5rem'} fontSize={{base:'0.8rem',sm:'1rem'}} type="submit">
              Update
            </Button>
          </Flex>
        </AbstractForm>
      </Box>
    </>
  );
}
