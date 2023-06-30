"use client";

import { Form } from "@/components/forms";
import { SvgSlider } from "../avatarsAndIcons";
import { eventIcons } from "../avatarsAndIcons/icons";
import { Box } from "@chakra-ui/react";
import { useContext, FormEvent, useState, forwardRef, RefObject, RefAttributes } from "react";
import { PopoverCloseContext } from "@/contexts";
import useEventCreate from "@/hooks/events/use-event-create";
import { SlideNumInput } from "@/components/forms";
import { Dispatch, SetStateAction, ForwardedRef } from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  RadioGroup,
  Radio,
  Stack
} from "@chakra-ui/react";
// interface Props {
//   userId: string;
// }
export const WhoRadio = forwardRef<HTMLInputElement>((props, ref) => {
  // const [val, setVal] = useState(typeof defaultVal!=='undefined'?defaultVal:'0') // 0 means +, 1 means -
  function setValue(e:any) {
   
  
  }
  return (
    <RadioGroup mt={'0.5rem'} onChange={setValue} ref={ref}>
      <Stack direction='row'>
        <Radio value={'0'}>You Paid</Radio>
        <Radio value={'1'}>They Paid</Radio>
      </Stack>
    </RadioGroup>
  )
})

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
    console.log("CREATE", onClose());
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
        <Flex mt={"1rem"} maxW={{ base: "300px", md: "600px" }}>
          <NumberInput
            maxW="120px"
            mr="2rem"
            value={money}
            onChange={numOnChange}
            min={0}
            isRequired={false}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Slider
            flex="1"
            focusThumbOnChange={false}
            value={money}
            onChange={numOnChange}
            defaultValue={500}
            min={0}
            max={1000}
            step={1}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb color={"gray"} fontSize="sm" boxSize="20px" />
          </Slider>
        </Flex>
        </Form>
      </Box>
    </>
  );
}
