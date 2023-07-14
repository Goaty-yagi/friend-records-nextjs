import { Button, Box } from "@chakra-ui/react"
import CustomPopover from "./CustomPopover"
import { EventCreateForm } from "../forms"
import { CreateButton } from "../forms/EventCreateForm"

export default function EventCreatePopover() {
    
    return (
        <>
        <CustomPopover trigger={<CreateButton/>} body={<EventCreateForm/>} />
        </>
    )
}