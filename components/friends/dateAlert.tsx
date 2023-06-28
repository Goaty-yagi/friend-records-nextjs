import { Flex, Text, Image } from "@chakra-ui/react";

function dateCalculation(date:string):number {
        const nowDate = new Date();
        const last_log = new Date(date);
        const diffMilliSec = nowDate.getTime() - last_log.getTime();
        const diffDays = diffMilliSec / 1000 / 60 / 60 / 24
        return diffDays;
      }

export default function DateAlert({date}:{date:string}) {
  return (
    <Flex w={"100%"} color={"red.500"} justifyContent={"flex-end"}>
      {dateCalculation(date) >= 30 && (
        <Flex
          alignItems={"center"}
          mr={"0.5rem"}
          borderRadius={"4px"}
          bg={"#c05e5e4d"}
          mt={"0.5rem"}
          pr={"0.5rem"}
          border={"solid #fa95f6"}
        >
          <Image
            src={`/svgs/clock.svg`}
            width={{ base: "20px", sm: "30px" }}
            height={"30px"}
          />
          <Text fontWeight={"bold"}>Catch up!</Text>
        </Flex>
      )}
    </Flex>
  );
}
