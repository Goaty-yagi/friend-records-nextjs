"use client";

import { useContext } from "react";
import { PopoverCloseContext } from "@/contexts";
import { Flex, Center, Button } from "@chakra-ui/react";
import useFriendBirthdayUpdate from "@/hooks/friends/use-friend-birthday-update";
import { CustomNumInput, CustomSlider } from "./inputFields";
import { FaBirthdayCake } from "react-icons/fa";

export function BirthdayButton() {
  const { isEditing, close } = useContext(PopoverCloseContext);
  const { onSubmit } = useFriendBirthdayUpdate();
  return (
    <Center>
      <Button
        w={"60%"}
        colorScheme="twitter"
        // isDisabled={isEditing&&!isChanged}
        leftIcon={<FaBirthdayCake />}
        onClick={isEditing? onSubmit : () => {}}
      >
        {isEditing ? "Save" : "Add Birthday?"}
      </Button>
    </Center>
  );
}

export default function FriendBirthdayUpdateForm() {
  const { year, month, day, isLoading, onChange, onSubmit } =
    useFriendBirthdayUpdate();
  const { isEditing, close } = useContext(PopoverCloseContext);
  const date = new Date(Date.now());
  const config = [
    {
      value: year,
      name: "year",
      title: "Year",
      max: date.getFullYear(),
      min: 1941,
      style: {
        w: "90px",
        mr: "1rem",
      },
    },
    {
      value: month,
      name: "month",
      title: "Month",
      max: 12,
      min: 1,
      style: {
        w: "70px",
        mr: "0.3rem",
      },
    },
    {
      value: day,
      name: "day",
      title: "Day",
      max: 31,
      min: 1,
      style: {
        w: "70px",
      },
    },
  ];
  const sliderConfig = [
    {
      name: "year",
      value: year,
      orientation: "vertical",
      max: date.getFullYear(),
      min: 1941,
      style: {
        mr: "0.5rem",
      },
    },
  ];
  return (
    <>
      <Flex>
        <CustomSlider sliderConfig={sliderConfig} onChange={onChange} />
        <Flex>
          <CustomNumInput config={config} onChange={onChange} />
        </Flex>
      </Flex>
    </>
  );
}
