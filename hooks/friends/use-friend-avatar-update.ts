import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { patchFriend } from '@/redux/features/friendSlice';
import { useUpdateFriendMutation } from '@/redux/features/friendApiSlice';

export default function useFriendAvatarUpdate() {
    const friend = useAppSelector((state) => state.friend).friendDetail
	const [updateFriend, { isLoading }] = useUpdateFriendMutation();
    const dispatch = useAppDispatch()

    const [icon, setIcon] = useState('')
	const onChange = (icon:string) => {
		setIcon(icon)
	};

	const onSubmit = () => {
        const id = friend.id
		updateFriend({ id, avatar:icon })
			.unwrap()
			.then((res) => {
                dispatch(patchFriend(res))
				toast.success('Syccessfully updated!');
			})
			.catch((e) => {
				const firstErrorMsg = Object.values(e.data)[0]
				toast.error('Failed to update!' + '\n' + firstErrorMsg);
			});
	};

	return {
        icon,
        isLoading,
		onChange,
		onSubmit,
	};
}