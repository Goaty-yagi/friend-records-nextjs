"use client";

import { useContext, useEffect, useState } from "react";
import { PopoverCloseContext } from "@/contexts";
import { Flex, Center, Button, IconButton } from "@chakra-ui/react";
import useFriendBirthdayUpdate from "@/hooks/friends/use-friend-birthday-update";
import { CustomNumInput, CustomSlider } from "./inputFields";
import { FaBirthdayCake } from "react-icons/fa";
import AbstractForm from "./AbstractForm";
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
        ml={'0.3rem'}
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
  console.log("CHECK DATE", defaultDate);
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    if (defaultDate && !mounted) {
      const dt = new Date(defaultDate?defaultDate:'')
      const year = dt.getFullYear();
      const month = dt.getMonth() + 1;
      const day = dt.getDate();
      setFormData({...formData,year:year,month:month, day:day })
    }
    return setMounted(true);
  }, []);
  const { year, month, day,formData, isLoading, setFormData,onChange, onSubmit } =
    useFriendBirthdayUpdate();
  const onClose = useContext(PopoverCloseContext);
  const date = new Date(Date.now());
  const customOnSubmit = (e: any) => {
    onClose();
    onSubmit(e);
  };
  const [isChanged, setIsChange] = useState(false)
  const customOnChange = (e:any) => {
    if(defaultDate) {
      setIsChange(true)
      onChange(e)
    } else {
      onChange(e)
    }
  }

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
  if (mounted) {
    return (
      <>
        <AbstractForm onSubmit={customOnSubmit}>
          <Flex mt={"1rem"}>
            <CustomSlider sliderConfig={sliderConfig} onChange={customOnChange} />
            <Flex>
              <CustomNumInput config={config} onChange={customOnChange} />
            </Flex>
          </Flex>
          <Flex mt={"0.5rem"} justifyContent={"flex-end"}>
            <Button isDisabled={typeof defaultDate!=='undefined'&&!isChanged} type={"submit"}>Update</Button>
          </Flex>
        </AbstractForm>
      </>
    );
  } else {
    return <></>
  }
}
