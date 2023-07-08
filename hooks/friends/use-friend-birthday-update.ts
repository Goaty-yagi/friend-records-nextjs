import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch } from '@/redux/hooks';
import { useUpdateBirthdayMutation } from '@/redux/features/friendApiSlice'
import { useAppSelector } from '@/redux/hooks';
import { patchFriend } from '@/redux/features/friendSlice';

export default function useFriendBirthdayUpdate() {
	console.log("FIRST_LOG")
	const [updateBirthday, { isLoading }] = useUpdateBirthdayMutation();
    const friend = useAppSelector((state) => state.friend).friendDetail

	const [formData, setFormData] = useState({
		year: 2000,
        month: 1,
        day: 1
	});
	const dispatch = useAppDispatch()
	const { year, month, day } = formData;
    const id = friend.id

	const onChange = (event: any) => {
		const { name, value } = event.target;
		console.log('chack form hook', name, value)
		setFormData({ ...formData, [name]: Number(value) });
	};
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		updateBirthday({year, month, day, id})
			.unwrap()
			.then((res) => {
				dispatch(patchFriend(res))
				toast.success('Syccessfully added birthday!');
			})
			.catch((e) => {
				const firstErrorMsg = Object.values(e.data)[0]
				toast.error('Failed to add a birthday' + '\n' + firstErrorMsg);
			});
	};

	return {
		year,
        month,
		day,
        isLoading,
		formData,
		setFormData,
		onChange,
		onSubmit,
	};
}