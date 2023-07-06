import { Button, CloseButton } from "@chakra-ui/react"
import CustomPopover from "./CustomPopover"
import { FriendCreateForm } from "../forms"
import { useState } from "react"
import DeleteFriend from "@/app/friendDetails/[slug]/deleteFriend"

export default function FriendDelConfPopover() {
    const [close, setClose] = useState(() => {})
    const style =  {
        bg:'gray',
        color:'white',
        border:'0.1rem solid #ff7070'
    }
    function CreateButton() {
        return (
            <CloseButton color={'#ff7373'} aria-label="delete friend"/>
        )
    }
    
    return (
        <>
        <CustomPopover trigger={<CreateButton/>} header={'Confirmation'} style={style} body={<DeleteFriend/>} />
        </>
    )
}