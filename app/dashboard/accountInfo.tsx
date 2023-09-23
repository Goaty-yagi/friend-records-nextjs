"use client";

import { Text, Flex, Stack,  } from "@chakra-ui/react";
import {  HiUser, HiMail, HiOutlineLockClosed } from "react-icons/hi";
import { CustomField } from "@/components/fields";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { UsernameUpdateForm } from "@/components/forms";
import InstallButton from "@/components/pwa/InstallButton";

export default function AccountInfo() {
  const { data: user } = useRetrieveUserQuery();
  const config = [
    {
      icon: <HiUser fontSize={"2rem"} color={"gray"} />,
      header: "USER NAME",
      text:<UsernameUpdateForm/>,
    },
    {
      icon: <HiMail fontSize={"2rem"} color={"gray"} />,
      header: "MAIL ADDRESS",
      text:user?user.email:''
    },
    {
      icon: <HiOutlineLockClosed fontSize={"2rem"} color={"gray"} />,
      header: "PASSWORD",
      text: "****************"
    },
  ];
    return (
      <>
        <Text fontWeight={"bold"} color={"gray"} fontSize={"1.5rem"}>
          Account Info
        </Text>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          h={"100%"}
        >
          <Stack mt={'0.5rem'} spacing="4px" fontFamily={'"Gill Sans", sans-serif'}>
            {config.map((each, index) => (
              <CustomField key={index} icon={each.icon} header={each.header} text={each.text}/>
            ))}
          </Stack>
          <InstallButton/>
        </Flex>
      </>
    );
  }