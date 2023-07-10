import { useContext, useState, ChangeEvent, useMemo } from "react";
import { FriendContext } from "@/contexts";
import { FaSearchPlus } from "react-icons/fa";
import { useAppSelector } from "@/redux/hooks";
import {
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

export default function FrinedSearch() {
  const { friendsArray, onChange } = useContext(FriendContext);
  const { friendList } = useAppSelector((state) => state.friend);

  if (friendList.length) {
   return (
      <>
        <FormControl isInvalid={!friendsArray.length} m={"1rem 0"}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaSearchPlus fontSize={"1.3rem"} color="gray.300" />
            </InputLeftElement>
            <Input
              type="search"
              onChange={onChange}
              border={"solid #3a86e4"}
              placeholder="Friend Search"
              background={"rgb(204 246 255 / 62%)"}
              size="md"
            ></Input>
          </InputGroup>
          <FormErrorMessage>No friend to show with the words.</FormErrorMessage>
        </FormControl>
      </>
    );
  }
  return <></>;
}
