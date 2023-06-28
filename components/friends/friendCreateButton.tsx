import { Button } from "@chakra-ui/react"
import CustomPopover from "../popovers/CustomPopover"

export default function FriendCreateButton() {
    function CreateButton() {
        return (
            <Button>Create</Button>
        )
    }
    
    function FormBody() {
        return (
            <>test</>
        )
    }
    return (
        <>
        <CustomPopover trigger={<CreateButton/>} body={<FormBody/>} />
        </>
    )
}