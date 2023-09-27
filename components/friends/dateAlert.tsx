import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";

function dateCalculation(date: string): number {
  const nowDate = new Date();
  const last_log = new Date(date);
  const diffMilliSec = nowDate.getTime() - last_log.getTime();
  const diffDays = diffMilliSec / 1000 / 60 / 60 / 24;
  return diffDays;
}

export function Container({
  children,
  isDisplayed,
}: {
  children: React.ReactNode;
  isDisplayed: boolean;
}) {
  return (
    <>
      {isDisplayed && (
        <Flex w={"100%"} color={"red.500"} justifyContent={"flex-end"}>
          <Flex
            alignItems={"center"}
            justifyContent={{ base: "center", sm: "" }}
            mr={"0.5rem"}
            borderRadius={"4px"}
            bg={"#c05e5e4d"}
            mt={"0.5rem"}
            p={{ base: "0 0.2rem", sm: 0 }}
            pr={{ base: "", sm: "0.5rem" }}
            border={"solid #fa95f6"}
          >
            {children}
          </Flex>
        </Flex>
      )}
    </>
  );
}

export default function DateAlert({ date }: { date: string }) {
  return (
    <Container isDisplayed={dateCalculation(date) >= 30}>
      <Image
        src={`/svgs/clock.svg`}
        width={{ base: "20px", sm: "30px" }}
        height={"30px"}
      />
      <Text fontWeight={"bold"}>Catch up!</Text>
    </Container>
  );
}
