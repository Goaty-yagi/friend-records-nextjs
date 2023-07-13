import CustomPopover from "./CustomPopover";
import AvatarUpdateForm, {
  EditButton,
} from "../forms/commons/AvatarUpdateForm";
export default function AvatarUpdatePopover({
  state,
}: {
  state: string;
}) {
  return (
    <>
      <CustomPopover
        trigger={<EditButton />}
        body={<AvatarUpdateForm state={state} />}
        noArrow={true}
      />
    </>
  );
}
