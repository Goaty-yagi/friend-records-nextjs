import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch } from '@/redux/hooks';
import { useUpdateBirthdayMutation } from '@/redux/features/friendApiSlice'
import { useAppSelector } from '@/redux/hooks';
import { patchFriend } from '@/redux/features/friendSlice';

export default function useFriendBirthdayUpdate() {
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

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		console.log("check",name, value)
		setFormData({ ...formData, [name]: value });
	};
	console.log("CHECKKK", year, month, day)
	const onSubmit = () => {
		console.log("SUBMIT",year, month, day, id)
		// event.preventDefault();
		updateBirthday({year, month, day, id})
			.unwrap()
			.then((res) => {
				dispatch(patchFriend(res))
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