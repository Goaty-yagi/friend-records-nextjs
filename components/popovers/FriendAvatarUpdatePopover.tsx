import CustomPopover from "./CustomPopover";
import { EditButton ,} from "../forms/friends/FriendAvatarUpdateForm";
import FriendAvatarUpdateForm from "../forms/friends/FriendAvatarUpdateForm";
export default function FriendAvatarUpdatePopover() {
// currently not in use
  return (
    <>
      <CustomPopover trigger={<EditButton />} body={<FriendAvatarUpdateForm />} />
    </>
  );
}
