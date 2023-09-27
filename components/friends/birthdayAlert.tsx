import { Container } from "./dateAlert";
import { Flex, Text, Image } from "@chakra-ui/react";

interface Props {
  alert: boolean;
  deffDate: number;
}

function birthDateCalculation(date: string): Props | undefined {
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
    <Container isDisplayed={dateDisplay === true}>
      <>
        <Image
          src={`/svgs/events/gift.svg`}
          width={{ base: "20px", sm: "30px" }}
          height={"30px"}
        />
        <Text
          fontWeight={"bold"}
          display={{ base: "none", sm: "inline-block" }}
        >
          {dateResultObj
            ? dateResultObj.deffDate === 0
              ? "Birthday Today!!"
              : "Birthday coming up!"
            : ""}
        </Text>
      </>
    </Container>
  );
}
