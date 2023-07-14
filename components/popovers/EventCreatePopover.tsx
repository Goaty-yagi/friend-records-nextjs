import { Button, Box } from "@chakra-ui/react"
import CustomPopover from "./CustomPopover"
import { EventCreateForm } from "../forms/events"
import { CreateButton } from "../forms/events/EventCreateForm"

export default function EventCreatePopover() {
    
    return (
        <>
        <CustomPopover trigger={<CreateButton/>} body={<EventCreateForm/>} />
        </>
    )
}