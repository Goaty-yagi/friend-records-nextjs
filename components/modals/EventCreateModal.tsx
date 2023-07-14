import CustomModal from "./CustomModal"
import {RiSettings4Line} from "react-icons/ri"
import EventCreateForm, { CreateButton }from "../forms/EventCreateForm";
import { IconButton } from "@chakra-ui/react";


export default function EventCreateModal() {
    return (
        <>
         <CustomModal isCentered={true} title={"Event-Info"} open={<CreateButton/>} content={<EventCreateForm />}/>
        </>
    )
}