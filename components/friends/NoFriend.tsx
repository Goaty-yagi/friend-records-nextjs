import { Text, Box, Image, Flex } from "@chakra-ui/react";
import { FriendCreatePopover } from "../popovers";
import CustomImage from "../common/CustomImages";
export default function NoFriend() {
  return (
    <>
      <Flex w={'100%'} flexDirection={"column"} alignItems={"center"}>
        <Text
          color={"#1166EE"}
          fontFamily={"Gill Sans"}
          fontWeight="bold"
          fontSize={"3rem"}
        >
          Create Friend
        </Text>
        <Box
          boxShadow="xl"
          border={"solid #cf5701"}
          w={"100%"}
          h={"400px"}
          position="relative"
        >
          <CustomImage
            src={"/images/friend.jpg"}
            layout="fill"
            objectFit="cover"
            alt={"asset"}
          />
        </Box>
        <FriendCreatePopover />
      </Flex>
    </>
  );
}
