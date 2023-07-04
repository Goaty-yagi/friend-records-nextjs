import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useFriendCreateMutation } from '@/redux/features/friendApiSlice';
import { toast } from 'react-toastify';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { unshiftFriend } from '@/redux/features/friendSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useUpdateBirthdayMutation } from '@/redux/features/friendApiSlice'
import { useAppSelector } from '@/redux/hooks';
// interface Props {
//     userId: string;
//   }

export default function useFriendBirthdayUpdate() {
	const [updateBirthday, { isLoading }] = useUpdateBirthdayMutation();
    const friend = useAppSelector((state) => state.friend).friendDetail
	const [formData, setFormData] = useState({
		year: 0,
        month: 0,
        day: 0
	});
	const dispatch = useAppDispatch()
	const { year, month, day } = formData;
    const id = friend.id

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		updateBirthday({year, month, day, id})
			.unwrap()
			.then((res) => {
				console.log("FRIEND", typeof res)
				dispatch(unshiftFriend(res))
				toast.success('Syccessfully aaded bzirthday!');
			})
			.catch((e) => {
				console.log(e)
				const firstErrorMsg = Object.values(e.data)[0]
				toast.error('Failed to add a birthday' + '\n' + firstErrorMsg);
			});
	};

	return {
		year,
        month,
		day,
        isLoading,
		onChange,
		onSubmit,
	};
}