import CustomModal from "./CustomModal"
import {RiSettings4Line} from "react-icons/ri"
import { IconButton } from "@chakra-ui/react";
import { EventUpdateForm } from "../forms"

interface Props {
    id:string;
    name:string;
    money:number;
    icon:string
}

export default function EventUpdateModal({ id, name, money, icon }:Props) {
    console.log("MODAL", id, name, money, icon)
    return (
        <>
         <CustomModal isCentered={true} title={"Event-Info"} open={ <IconButton aria-label="evnet-info" color={'gray'} icon={<RiSettings4Line/>}/>} content={<EventUpdateForm {...{id, name, eventMoney:money, icon }}/>}/>
        </>
    )
}