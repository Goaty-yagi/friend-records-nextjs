import { Button, CloseButton } from "@chakra-ui/react"
import CustomPopover from "./CustomPopover"
import { FriendCreateForm } from "../forms"
import Logout from "@/app/dashboard/logout"
import { useState } from "react"

export default function LogoutConfPopover() {
    const [close, setClose] = useState(() => {})
    const style =  {
        bg:'gray',
        color:'white',
        border:'0.1rem solid #ff7070'
    }
    function CreateButton() {
        return (
            <Button colorScheme='red' variant='outline' >Logout</Button>
        )
    }
    
    return (
        <>
        <CustomPopover trigger={<CreateButton/>} header={'Confirmation'} style={style} body={<Logout/>} />
        </>
    )
}