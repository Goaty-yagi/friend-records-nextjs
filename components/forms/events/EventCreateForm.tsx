"use client";

import { SvgSlider } from "@/components/avatarsAndIcons";
import { eventIcons } from "@/components/avatarsAndIcons/icons";
import { useContext, FormEvent } from "react";
import { PopoverCloseContext, ModalCloseContext } from "@/contexts";
import useEventCreate from "@/hooks/events/use-event-create";
import { Flex, Box, Button } from "@chakra-ui/react";
import { Form } from "../index";
import { CustomNumInput , CustomSlider, CustomRadio} from "../inputFields";


export function CreateButton() {
  return (
      <Button>Create</Button>
  )
}
export default function EventCreateForm() {
  const format = (val: number) => `$ ` + val;
  const {
    eventName,
    isLoading,
    icon,
    money,
    setIcon,
    onChange,
    onSubmit,
  } = useEventCreate();
  const onClose = useContext(PopoverCloseContext);
  const modalContext = useContext(ModalCloseContext);
  function customOnsubmit(event: FormEvent<HTMLFormElement>) {
    onSubmit(event);
    if(modalContext === null) {
      onClose();
    } else {
      modalContext()
    }
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
  const sliderConfig = [{
    name:'money',
    value:money,
    max:1000,
    min:0,
    style:{

    }
  }]
  return (
    <>
      <Box mt={"0.9rem"}>
        <SvgSlider svgArray={eventIcons} setFun={setIcon} />
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
            <CustomNumInput key={'input'} config={sliderConfig} onChange={onChange} />
            <CustomSlider sliderConfig={sliderConfig} onChange={onChange} />
          </Flex>
        </Form>
      </Box>
    </>
  );
}
