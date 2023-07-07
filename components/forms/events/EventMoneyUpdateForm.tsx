import { useContext, FormEvent, useEffect, useState } from "react";
import { PopoverCloseContext } from "@/contexts";
import { Flex, Box, Button } from "@chakra-ui/react";
import { CustomNumInput, CustomSlider, CustomRadio } from "../inputFields";
import AbstractForm from "../AbstractForm";
import useEventMoneyUpdate from "@/hooks/events/use-event-money-update";

interface Props {
  eventMoney: number;
  id: string;
}

export default function EventMOneyUpdateForm({ eventMoney, id }: Props) {
  useEffect(() => {
    if (!mounted) {
      setEventId(id);
      setDefaultMoney(eventMoney)
      onChange({
        target: {
          name: "money",
          value: eventMoney >= 0 ? eventMoney : eventMoney * -1,
        },
      });
      setWhoPayed(eventMoney >= 0 ? "+" : "-")
      return setMounted(true);
    }
  }, []);
  const format = (val: number) => `$ ` + val;
  const [mounted, setMounted] = useState(false);
  const { isLoading, money, whoPayed, setEventId,setDefaultMoney,setWhoPayed, onChange, onSubmit } =
    useEventMoneyUpdate();
  const onClose = useContext(PopoverCloseContext);
  const [isChange, setIsChange] = useState(false);
  function customOnsubmit(event: FormEvent<HTMLFormElement>) {
    onSubmit(event)
    onClose();
  }
  function customOnChange(e: any) {
    onChange(e);
    setIsChange(true);
  }
  function radioOnChange(e:any) {
    setWhoPayed(e.target.value)
    setIsChange(true);
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
  return (
    <>
      {mounted && (
        <Box mt={"0.9rem"}>
          <AbstractForm onSubmit={customOnsubmit}>
            <Box position={"relative"}>
              <CustomRadio
                config={radioConfig}
                name={"whoPayed"}
                defaltValue={whoPayed}
                setter={radioOnChange}
              />
            </Box>
            <Flex maxW={{ base: "300px", md: "600px" }}>
              <CustomNumInput
                key={"input"}
                config={sliderConfig}
                onChange={customOnChange}
              />
              <CustomSlider
                sliderConfig={sliderConfig}
                onChange={customOnChange}
              />
            </Flex>
            <Flex justifyContent={"flex-end"}>
              <Button mt={"0.5rem"} isDisabled={!isChange} type={"submit"}>
                Update
              </Button>
            </Flex>
          </AbstractForm>
        </Box>
      )}
    </>
  );
}
