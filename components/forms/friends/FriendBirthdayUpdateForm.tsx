"use client";

import { useContext, useEffect, useState } from "react";
import { PopoverCloseContext } from "@/contexts";
import { Flex, Center, Button, IconButton } from "@chakra-ui/react";
import useFriendBirthdayUpdate from "@/hooks/friends/use-friend-birthday-update";
import { CustomNumInput, CustomSlider } from "../inputFields";
import { FaBirthdayCake } from "react-icons/fa";
import AbstractForm from "../AbstractForm";
import { BsCheck2Square, BsFileX } from "react-icons/bs";
import { RiEdit2Line } from "react-icons/ri";

interface Props {
  state: "initial" | "patch";
}
export function BirthdayButton({ state }: Props) {
  const { isEditing, close } = useContext(PopoverCloseContext);
  const { onSubmit } = useFriendBirthdayUpdate();
  if (state === "initial") {
    return (
      <Center>
        <Button
          w={"60%"}
          // type={isEditing?'submit':'button'}
          colorScheme="twitter"
          // isDisabled={isEditing&&!isChanged}
          leftIcon={<FaBirthdayCake />}
          // onClick={isEditing? onSubmit : () => {}}
        >
          {/* {isEditing ? "Save" : "Add Birthday?"} */}
          Add Birthday?
        </Button>
      </Center>
    );
  } else {
    return (
      <IconButton
        size={"xs"}
        ml={"0.3rem"}
        aria-label="birthday-update"
        icon={<FaBirthdayCake />}
      />
    );
  }
}

interface DefaultProps {
  defaultDate?: string;
}
export default function FriendBirthdayUpdateForm({
  defaultDate,
}: DefaultProps) {
  const [mounted, setMounted] = useState(false);
  const { isEditing, close } = useContext(PopoverCloseContext);
  
  useEffect(() => {
    if (defaultDate && !mounted) {
      const dt = new Date(defaultDate ? defaultDate : "");
      const year = dt.getFullYear();
      const month = dt.getMonth() + 1;
      const day = dt.getDate();
      setFormData({ ...formData, year: year, month: month, day: day });
    } else {
      setIsChange(true)
    }
    return setMounted(true);
  }, []);
  const {
    year,
    month,
    day,
    formData,
    isLoading,
    setFormData,
    onChange,
    onSubmit,
  } = useFriendBirthdayUpdate();
  const onClose = useContext(PopoverCloseContext);
  const date = new Date(Date.now());
  const customOnSubmit = (e: any) => {
    onClose();
    onSubmit(e);
  };
  const [isChanged, setIsChange] = useState(false);
  const customOnChange = (e: any) => {
    if (defaultDate) {
      setIsChange(true);
      onChange(e);
    } else {
      onChange(e);
    }
  };

  const config = [
    {
      value: year,
      name: "year",
      title: "Year",
      max: date.getFullYear(),
      min: 1941,
      style: {
        w: "80px",
        mr: "0.5rem",
        size: "sm",
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
        size: "sm",
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
        size: "sm",
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
        mr:'0.5rem'
      },
    },
  ];
  if (mounted) {
    return (
      <>
        <AbstractForm onSubmit={customOnSubmit}>
          <Flex w={"100%"} h={'50px'} className="PARENT WRAPPER" mt={"1rem"}>
            <CustomSlider
              sliderConfig={sliderConfig}
              onChange={customOnChange}
            />
            <CustomNumInput config={config} onChange={customOnChange} />
            <Flex h={'100%'} position={'relative'} top={'1.1rem'} right={'0.5rem'}>
              <IconButton
                size={"xs"}
                aria-label="submit"
                type="submit"
                isDisabled={!isChanged}
                icon={<BsCheck2Square color={isChanged?'green':'red'}/>}
              />
            </Flex>
          </Flex>
        </AbstractForm>
      </>
    );
  } else {
    return <></>;
  }
}
