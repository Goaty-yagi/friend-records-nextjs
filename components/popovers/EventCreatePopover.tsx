import { Button, Box } from "@chakra-ui/react"
import CustomPopover from "./CustomPopover"
import { EventCreateForm } from "../forms"
import { useState } from "react"
export default function EventCreatePopover() {
    function CreateButton() {
        return (
            <Button>Create</Button>
        )
    }
    
    return (
        <>
        <CustomPopover trigger={<CreateButton/>} body={<EventCreateForm/>} />
        </>
    )
}