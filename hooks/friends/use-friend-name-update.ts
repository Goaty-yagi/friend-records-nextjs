import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useFriendCreateMutation } from '@/redux/features/friendApiSlice';
import { toast } from 'react-toastify';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { unshiftFriend } from '@/redux/features/friendSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { patchFriend } from '@/redux/features/friendSlice';
import { useUpdateFriendMutation } from '@/redux/features/friendApiSlice';

export default function useFriendNameUpdate() {
    const friend = useAppSelector((state) => state.friend).friendDetail
	const [updateFriend, { isLoading }] = useUpdateFriendMutation();
	const dispatch = useAppDispatch()
	const [formData, setFormData] = useState({
		friendName: friend?friend.name:'',
	});

	const { friendName } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
        const id = friend.id
		updateFriend({ id, name:friendName })
			.unwrap()
			.then((res) => {
				dispatch(patchFriend(res))
				toast.success('Successfully updated!');
			})
			.catch((e) => {
				const firstErrorMsg = Object.values(e.data)[0]
				toast.error('Failed to update!' + '\n' + firstErrorMsg);
			});
	};

	return {
		friendName,
        isLoading,
		onChange,
		onSubmit,
	};
}