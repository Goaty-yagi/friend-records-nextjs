import { Button } from "@chakra-ui/react"
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
        <>
        <CustomPopover trigger={<CreateButton/>} body={<FriendCreateForm/>} />
        </>
    )
}