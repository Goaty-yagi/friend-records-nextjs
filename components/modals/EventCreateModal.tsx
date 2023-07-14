import CustomModal from "./CustomModal"
import {RiSettings4Line} from "react-icons/ri"
import EventCreateForm, { CreateButton }from "@/components/forms/events/EventCreateForm";


export default function EventCreateModal() {
    return (
        <>
         <CustomModal isCentered={true} title={"Event-Info"} open={<CreateButton/>} content={<EventCreateForm />}/>
        </>
    )
}