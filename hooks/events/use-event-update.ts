import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import {  useAppDispatch } from "@/redux/hooks";
import { useUpdateEventMutation } from '@/redux/features/eventApiSlice';
import { updateFriendFromEventUpdate } from '@/redux/features/friendSlice';
import { updateEvent as setUpdateEvent } from '@/redux/features/eventSlice';
import { setModalSpinner } from '@/redux/features/authSlice';

export default function useEventCreate() {
	const [updateFriend, { isLoading }] = useUpdateEventMutation();
	const dispatch = useAppDispatch()
	const [formData, setFormData] = useState({
		eventName: '',
		whoPayed: '+',
		money: 0
	});
    const [eventId, setEventId] = useState('')
	const [icon, setIcon] = useState('')
    const [defaultMoney, setDefaultMoney] = useState(0)
	const { eventName, whoPayed, money } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		console.log(event.target)
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const CustomMoney = whoPayed === '+' ? money : money * -1
		dispatch(setModalSpinner(true))
		console.log("IN")
		updateFriend({ name: eventName, id: eventId, icon, money: CustomMoney })
			.unwrap()
			.then((res) => {
				dispatch(setUpdateEvent(res))
                dispatch(updateFriendFromEventUpdate({caledMoney:res.money - defaultMoney, event:res}))
				dispatch(setModalSpinner(false))
				toast.success('Successfully updated!');
			})
			.catch((e) => {
				const firstErrorMsg = Object.values(e.data)[0]
				dispatch(setModalSpinner(true))
				toast.error('Failed to update a event' + '\n' + firstErrorMsg);
			});
	};

	return {
		eventName,
		whoPayed,
		isLoading,
		icon,
		money,
        formData,
        setFormData,
		setIcon,
        setEventId,
		onChange,
		onSubmit,
        setDefaultMoney,
	};
}