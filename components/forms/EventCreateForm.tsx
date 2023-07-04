"use client";

import { SvgSlider } from "../avatarsAndIcons";
import { eventIcons } from "../avatarsAndIcons/icons";
import { useContext, FormEvent } from "react";
import { PopoverCloseContext } from "@/contexts";
import useEventCreate from "@/hooks/events/use-event-create";
import { Flex, Box } from "@chakra-ui/react";
import { Form } from "./index";
import { CustomNumInput , CustomSlider, CustomRadio} from "./inputFields";

export default function EventCreateForm() {
  const format = (val: number) => `$ ` + val;
  const {
    eventName,
    isLoading,
    icon,
    money,
    setIcon,
    onChange,
    numOnChange,
    onSubmit,
  } = useEventCreate();
  const onClose = useContext(PopoverCloseContext);

  function customOnsubmit(event: FormEvent<HTMLFormElement>) {
    onSubmit(event);
    onClose();
  }
  const config = [
    {
      labelText: "Event Name",
      labelId: "eventName",
      placeholder: "Enter event name.",
      type: "text",
      value: eventName,
      required: true,
    },
  ];
  const radioConfig = [
    { text: "You Payed", value: "+", checked: true },
    {
      text: "They Payed",
      value: "-",
      checked: false,
    },
  ];
  return (
    <>
      <Box mt={"0.9rem"}>
        <SvgSlider selected={icon} svgArray={eventIcons} setFun={setIcon} />
        <Form
          config={config}
          isLoading={isLoading}
          btnText="Create"
          onChange={onChange}
          onSubmit={customOnsubmit}
        >
          <Box position={"relative"}>
            <Box position={"absolute"} top={-2}>
              <CustomRadio
                config={radioConfig}
                name={'whoPayed'}
                defaltValue={"+"}
                setter={onChange}
              />
            </Box>
          </Box>
          <Flex mt={"1rem"} maxW={{ base: "300px", md: "600px" }}>
            <CustomNumInput value={money} onChange={numOnChange} />
            <CustomSlider value={money} onChange={numOnChange} />
          </Flex>
        </Form>
      </Box>
    </>
  );
}
