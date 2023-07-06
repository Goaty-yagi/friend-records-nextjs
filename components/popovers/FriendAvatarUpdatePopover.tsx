import CustomPopover from "./CustomPopover";
import { EditButton ,} from "../forms/FriendAvatarUpdateForm";
import FriendAvatarUpdateForm from "../forms/FriendAvatarUpdateForm";
export default function FriendAvatarUpdatePopover() {

  return (
    <>
      <CustomPopover trigger={<EditButton />} body={<FriendAvatarUpdateForm />} />
    </>
  );
}
