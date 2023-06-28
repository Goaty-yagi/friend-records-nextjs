import { Text, Box, Image, Flex } from "@chakra-ui/react"
import FriendCreateButton from "./friendCreateButton"
export default function NoFriend() {
    return (
        <>
        <Flex flexDirection={'column'} alignItems={'center'}>
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
          h={400}
          position="relative"
        >
          <Image
            src={"/images/friend.jpg"}
            // layout="fill"
            objectFit="cover"
            alt={"asset"}
          />
        </Box>
        <FriendCreateButton/>

        </Flex>
        
      </>
    )
}