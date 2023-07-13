import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useFriendCreateMutation } from '@/redux/features/friendApiSlice';
import { toast } from 'react-toastify';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { unshiftFriend } from '@/redux/features/friendSlice';
import { useAppDispatch } from '@/redux/hooks';
// interface Props {
//     userId: string;
//   }

export default function useFriendCreate() {
    const { data: user } = useRetrieveUserQuery();
	const [friendCreate, { isLoading }] = useFriendCreateMutation();
	const [formData, setFormData] = useState({
		friendName: '',
	});
    const [avatar, setAvatar] = useState('def')
	const dispatch = useAppDispatch()
    const userId = user?user.UID:''
	const { friendName } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		friendCreate({ name:friendName, user:userId, avatar:avatar })
			.unwrap()
			.then((res) => {
				dispatch(unshiftFriend(res))
				toast.success('Syccessfully created!');
			})
			.catch((e) => {
				const firstErrorMsg = Object.values(e.data)[0]
				toast.error('Failed to create a friend' + '\n' + firstErrorMsg);
			});
	};

	return {
		friendName,
        isLoading,
		avatar,
        setAvatar,
		onChange,
		onSubmit,
	};
}