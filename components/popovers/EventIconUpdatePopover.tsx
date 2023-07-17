import { Button, Box } from "@chakra-ui/react"
import CustomPopover from "./CustomPopover"
import EventIconUpdateForm from "../forms/events/EventIconUpdateForm"
import { useState } from "react"

interface Props{
    id:string;
    icon:string;
    button:any
}
export default function EventIconUpdatePopover({ id, icon, button }: Props) {
    const [close, setClose] = useState(() => {})

    
    return (
        <>
        {/* <CustomPopover trigger={button} body={<EventIconUpdateForm icon={icon} id={id}/>} /> */}
        </>
    )
}