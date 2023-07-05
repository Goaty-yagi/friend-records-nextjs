import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { unshiftFriend } from '@/redux/features/friendSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useUpdateBirthdayMutation } from '@/redux/features/friendApiSlice'
import { useAppSelector } from '@/redux/hooks';


export default function useFriendBirthdayUpdate() {
	const [updateBirthday, { isLoading }] = useUpdateBirthdayMutation();
    const friend = useAppSelector((state) => state.friend).friendDetail
    const date = new Date(Date.now());
	const [formData, setFormData] = useState({
		year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
	});
	const dispatch = useAppDispatch()
	const { year, month, day } = formData;
    const id = friend.id

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = () => {
		// event.preventDefault();
		updateBirthday({year, month, day, id})
			.unwrap()
			.then((res) => {
				dispatch(unshiftFriend(res))
				toast.success('Syccessfully added birthday!');
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