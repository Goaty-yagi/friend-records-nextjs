import { Flex, Text, Image } from "@chakra-ui/react";

interface Props{
    alert:boolean
    deffDate:number
}

function birthDateCalculation(date: string):Props | undefined {
  if (date) {
    const nowDate = new Date();
    const bDate = new Date(date);
    const deffMonth = nowDate.getMonth() - bDate.getMonth();
    const deffDate = nowDate.getDate() - bDate.getDate();
    if (deffMonth === 0) {
      if (deffDate <= 0) {
        return { alert: true, deffDate: deffDate };
      }
    } else if (deffMonth === -1 || deffMonth === 11) {
      if (deffDate >= 0) {
        return { alert: true, deffDate: deffDate };
      }
    }
  }
}

export default function BirthdayAlert({ date }: { date: string }) {
  const dateResultObj = birthDateCalculation(date);
  const dateDisplay =
    typeof dateResultObj !== "undefined" ? dateResultObj.alert : "";
  return (
    <Flex w={"100%"} color={"red.500"} justifyContent={"flex-end"}>
      {dateDisplay ? (
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
            src={`/svgs/events/gift.svg`}
            width={{ base: "20px", sm: "30px" }}
            height={"30px"}
          />
          <Text fontWeight={"bold"}>
            {dateResultObj?(dateResultObj.deffDate === 0
              ? "Birthday is Today!"
              : "Birthday is Soon!"):''}
          </Text>
        </Flex>
      ) : (
        <></>
      )}
    </Flex>
  );
}
