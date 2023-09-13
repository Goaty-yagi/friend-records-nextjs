import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { patchFriend } from '@/redux/features/friendSlice';
import { useUpdateFriendMutation } from '@/redux/features/friendApiSlice';
import { setIsLoadings } from '@/redux/features/friendSlice';

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
		dispatch(setIsLoadings({type:'avatar', condition:true}))
		updateFriend({ id, avatar:icon })
			.unwrap()
			.then((res) => {
                dispatch(patchFriend(res))
				toast.success('Successfully updated!');
				dispatch(setIsLoadings({type:'avatar', condition:false}))
			})
			.catch((e) => {
				const firstErrorMsg = Object.values(e.data)[0]
				toast.error('Failed to update!' + '\n' + firstErrorMsg);
				dispatch(setIsLoadings({type:'avatar', condition:false}))
			});
	};

	return {
        icon,
        isLoading,
		onChange,
		onSubmit,
	};
}