"use client";

import { SvgSlider } from "../avatarsAndIcons";
import { eventIcons } from "../avatarsAndIcons/icons";
import { useContext, FormEvent, useEffect } from "react";
import { PopoverCloseContext } from "@/contexts";
import useEventUpdate from "@/hooks/events/use-event-update";
import { Flex, Box } from "@chakra-ui/react";
import { Form } from "./index";
import { CustomNumInput, CustomSlider, CustomRadio } from "./inputFields";

interface Props {
  id: string;
  name: string;
  money: number;
  icon: string;
}

export default function EventUpdateForm({ id, name, money, icon }: Props) {
  const format = (val: number) => `$ ` + val;
  useEffect(() => {
    setEventId(id);
  }, []);
  const { eventName, isLoading, setIcon, setEventId, onChange, onSubmit } =
    useEventUpdate();
  const onClose = useContext(PopoverCloseContext);
  function customOnsubmit(event: FormEvent<HTMLFormElement>) {
    onSubmit(event);
    onClose();
  }
  console.log("CHECK", id, name, money, icon);
  const config = [
    {
      labelText: "Event Name",
      labelId: "eventName",
      placeholder: "Enter event name.",
      type: "text",
      value: name,
      required: true,
    },
  ];
  const radioConfig = [
    { text: "You Payed", value: "+", checked: false },
    {
      text: "They Payed",
      value: "-",
      checked: true,
    },
  ];
  const sliderConfig = [
    {
      name: "money",
      value: money < 0?money*-1:money,
      max: 1000,
      min: 0,
      style: {},
    },
  ];
  return (
    <>
      <Box mt={"0.9rem"}>
        <SvgSlider defaultSvg={icon} svgArray={eventIcons} setFun={setIcon} />
        <Form
          config={config}
          isLoading={isLoading}
          btnText="Update"
          onChange={onChange}
          onSubmit={customOnsubmit}
        >
          <Box position={"relative"}>
            <Box position={"absolute"} top={-2}>
              <CustomRadio
                config={radioConfig}
                name={"whoPayed"}
                defaltValue={money >= 0?'+':'-'}
                setter={onChange}
              />
            </Box>
          </Box>
          <Flex mt={"1rem"} maxW={{ base: "300px", md: "600px" }}>
            <CustomNumInput
              key={"input"}
              config={sliderConfig}
              onChange={onChange}
            />
            <CustomSlider sliderConfig={sliderConfig} onChange={onChange} />
          </Flex>
        </Form>
      </Box>
    </>
  );
}
