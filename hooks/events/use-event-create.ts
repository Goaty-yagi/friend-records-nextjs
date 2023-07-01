import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useEventCreateMutation } from '@/redux/features/eventApiSlice';
import { unshiftEvent } from '@/redux/features/eventSlice';
import { updateFriend } from '@/redux/features/friendSlice';


export default function useEventCreate() {
	const [eventCreate, { isLoading }] = useEventCreateMutation();
	const dispatch = useAppDispatch()
    const { friendId } = useAppSelector((state) => state.friend);
	const [formData, setFormData] = useState({
		eventName: '',
		whoPayed:'+'
	});
    const [icon, setIcon] = useState('')
    const [money, setMoney] = useState<number>(0)
	const { eventName, whoPayed } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

    const numOnChange = (e: any) => {
        setMoney(e);
    }

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const CustomMoney = whoPayed==='+'?money:money * -1
		eventCreate({ name:eventName, friend:friendId, icon, money:CustomMoney })
			.unwrap()
			.then((res) => {
				dispatch(unshiftEvent(res))
				dispatch(updateFriend(res))
				toast.success('Syccessfully created!');
			})
			.catch((e) => {
				const firstErrorMsg = Object.values(e.data)[0]
				toast.error('Failed to create a event' + '\n' + firstErrorMsg);
			});
	};

	return {
		eventName,
		whoPayed,
        isLoading,
		icon,
        money,
        setIcon,
		onChange,
        numOnChange,
		onSubmit,
	};
}