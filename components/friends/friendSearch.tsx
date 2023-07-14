import { useContext, useState, useEffect } from "react";
import { FriendContext } from "@/contexts";
import { FaSearchPlus } from "react-icons/fa";
import {
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
  Center
} from "@chakra-ui/react";

export default function FrinedSearch() {
  const { friendsArray, onChange } = useContext(FriendContext);
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    if(friendsArray.length) {
      setIsMounted(true)
    }
  },[friendsArray])

   return (
      <>
        <FormControl isInvalid={!friendsArray.length&&isMounted} m={"1rem 0"}>
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
          <Center>
          <FormErrorMessage>No friend to show with the words.</FormErrorMessage>
          </Center>
        </FormControl>
      </>
    );
}
