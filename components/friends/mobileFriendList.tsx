import { Text, Box, Stack } from "@chakra-ui/react";
import { FaPeopleArrows } from "react-icons/fa";
import { dateConvert } from "@/utils/dates";
import { CustomField } from "../fields";
import { BsCalendarEvent } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { useAppSelector } from "@/redux/hooks";
import { FriendResponse } from "@/redux/features/friendApiSlice";

interface Props {
  friend: FriendResponse;
  spentOrReceive: any;
}

export default function MobileFriendList({ friend, spentOrReceive }: Props) {
  const { friendList } = useAppSelector((state) => state.friend);
  const mr = "0.5rem";
  const color = () => {
    return friend.sum >= 0 ? "#c0fafb" : "#ff9393";
  };
  const config = [
    {
      icon: <FaMoneyCheckAlt fontSize={"1.5rem"} color={color()} />,
      header: <Text color={color()}>{spentOrReceive(friend.sum)}</Text>,
      text: <Text color={color()}>{friend.sum}</Text>,
      mr: mr,
    },
    {
      icon: <FaPeopleArrows fontSize={"1.5rem"} color={"gray"} />,
      header: <Text color={"white"}>Number of events</Text>,
      text: friend.event_length,
      mr: mr,
    },
    {
      icon: <BsCalendarEvent fontSize={"1.5rem"} color={"gray"} />,
      header: <Box color={"white"}>Last Interaction</Box>,
      text: dateConvert(friend.last_log),
      mr: mr,
    },
  ];
  return (
    <Box h={'105px'} display={{ md: "none" }}>
      <Stack position={"relative"} spacing={"-10px"}>
        {config.map((e, index) => (
          <Box mt={'-0.4rem'} key={index} fontFamily={'"Gill Sans", sans-serif'}>
            <CustomField {...e} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
