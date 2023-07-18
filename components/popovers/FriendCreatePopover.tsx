import { Button, Box } from "@chakra-ui/react"
import CustomPopover from "./CustomPopover"
import { FriendCreateForm } from "../forms/friends"
import { useState } from "react"
export default function FriendCreatePopover() {
    const [close, setClose] = useState(() => {})
    function CreateButton() {
        return (
            <Button bg={'#337bd3'} border={'solid #ffdce2'} color={'white'} size={'lg'} _hover={{bg:'#1e6595'}}>Create</Button>
        )
    }
    
    return (
        < Box mt={'0.5rem'}>
        <CustomPopover trigger={<CreateButton/>} body={<FriendCreateForm/>} />
        </Box>
    )
}