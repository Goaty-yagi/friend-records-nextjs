import { useState, useContext } from "react";
import { Flex, Text, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { FriendResponse } from "@/redux/features/friendApiSlice";
import { useAppSelector } from "@/redux/hooks";
import {FiChevronDown} from 'react-icons/fi'
import { FriendContext } from "@/contexts";
// import { Menu } from "../menues";

// will be used by menu component.

export const sortOptionStates = {
    LOW_AMOUNT: "Low Amount",
    HIGH_AMOUNT: "High Amount",
    LATEST: "Latest",
    OLDEST: "Oldest",
    Name: "Name A to Z",
    EVENT: "Event",
    // BIRTHDAY: "Birthday",
  };

export default function FriendSort() {
  const { friendList } = useAppSelector((state) => state.friend);
  const [currentOption, setCurrentOption] = useState("");
  const {friendsArray, setFriendsArray} = useContext(FriendContext)
  const sortBy = "Sort By";

  function sortFunc(option: string) {
    setCurrentOption(option);
    switch (option) {
      case sortOptionStates.HIGH_AMOUNT:
        return setFriendsArray([...friendsArray.sort((a:FriendResponse, b:FriendResponse) => b.sum - a.sum)]);
      case sortOptionStates.EVENT:
        return setFriendsArray([...friendsArray.sort((a:FriendResponse, b:FriendResponse) => b.event_length - a.event_length)]);
      case sortOptionStates.LOW_AMOUNT:
        return setFriendsArray([...friendsArray.sort((a:FriendResponse, b:FriendResponse) => a.sum - b.sum)]);
      case sortOptionStates.LATEST:
        return setFriendsArray([...friendsArray.sort(
          (a:FriendResponse, b:FriendResponse) => new Date(b.last_log).getTime() - new Date(a.last_log).getTime()
        )]);
      case sortOptionStates.OLDEST:
        return setFriendsArray([...friendsArray.sort(
          (a:FriendResponse, b:FriendResponse) => new Date(a.last_log).getTime() - new Date(b.last_log).getTime()
        )]);

      case sortOptionStates.Name:
        return setFriendsArray([...friendsArray.sort((a:FriendResponse, b:FriendResponse) => {
          if (a.name > b.name) {
            return 1;
          } else {
            return -1;
          }
        })]);
    }
  }
  return (
    <Menu>
      <MenuButton
        as={Button}
        size={{ base: "xs", md: "sm" }}
        mr="0.5rem"
        border={"solid navy"}
        rightIcon={<FiChevronDown />}
      >
        <Flex>
          <Text fontWeight={"bold"}>{sortBy}</Text>
          <Text p={"0 0.2rem"}>:</Text>
          {currentOption}
        </Flex>
      </MenuButton>
      <MenuList>
        {Object.values(sortOptionStates).map((option, index) => {
          return (
            <MenuItem
              key={index}
              onClick={() => {
                sortFunc(option);
              }}
            >
              <Text as="p" fontSize={"sm"}>
                {option}
              </Text>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
