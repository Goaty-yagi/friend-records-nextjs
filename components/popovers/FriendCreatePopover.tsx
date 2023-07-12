import { Button, Box } from "@chakra-ui/react"
import CustomPopover from "./CustomPopover"
import { FriendCreateForm } from "../forms"
import { useState } from "react"
export default function FriendCreatePopover() {
    const [close, setClose] = useState(() => {})
    function CreateButton() {
        return (
            <Button>Create</Button>
        )
    }
    
    return (
        < Box mt={'0.5rem'}>
        <CustomPopover trigger={<CreateButton/>} body={<FriendCreateForm/>} />
        </Box>
    )
}