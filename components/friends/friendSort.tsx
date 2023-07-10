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
  const [currentOption, setCurrentOption] = useState("");
  const { onClick} = useContext(FriendContext)
  const sortBy = "Sort By";

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
                onClick(option)
                ,setCurrentOption(option);;
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
