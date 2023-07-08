import { Button, CloseButton } from "@chakra-ui/react";
import CustomPopover from "./CustomPopover";
import { useState } from "react";
import DeleteEvent from "@/app/friendDetails/[slug]/deleteEvent";
import { EventProps } from "@/redux/features/eventApiSlice";


export default function EventDelConfPopover({ ...event }: EventProps) {
  const [close, setClose] = useState(() => {});
  const style = {
    bg: "gray",
    color: "white",
    border: "0.1rem solid #ff7070",
  };
  function CreateButton() {
    return <CloseButton color={"#ff7373"} aria-label="delete friend" />;
  }

  return (
    <>
      <CustomPopover
        trigger={<CreateButton />}
        header={"Confirmation"}
        style={style}
        body={<DeleteEvent {...event} />}
      />
    </>
  );
}
