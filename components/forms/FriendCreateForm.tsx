"use client";

import useFriendCreate from "@/hooks/friends/use-friend-create";
import { Form } from "@/components/forms";

// interface Props {
//   userId: string;
// }

export default function FriendCreateForm() {
  const { friendName, isLoading, onChange, onSubmit } = useFriendCreate();

  const config = [
    {
      labelText: "Friend Name",
      labelId: "friendName",
      placeholder: "Enter Friend name.",
      type: "text",
      value: friendName,
      required: true,
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Create"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
