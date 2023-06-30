import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useEventCreateMutation } from '@/redux/features/eventApiSlice';
import { unshiftEvent } from '@/redux/features/eventSlice';
import { NumberInputProps } from '@chakra-ui/react';
// interface Props {
//     userId: string;
//   }

export default function useEventCreate() {
	const [eventCreate, { isLoading }] = useEventCreateMutation();
    const { friendId } = useAppSelector((state) => state.friend);
	const [formData, setFormData] = useState({
		eventName: '',
	});
    const [icon, setIcon] = useState('')
    const [money, setMoney] = useState<number>(0)
	const dispatch = useAppDispatch()
	const { eventName } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};
    const numOnChange = (e: any) => {
        console.log(e,friendId)
        setMoney(e);
    }
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		eventCreate({ name:eventName, friend:friendId, icon, money })
			.unwrap()
			.then((res) => {
				dispatch(unshiftEvent(res))
				toast.success('Syccessfully created!');
			})
			.catch((e) => {
				const firstErrorMsg = Object.values(e.data)[0]
				toast.error('Failed to create a event' + '\n' + firstErrorMsg);
			});
	};

	return {
		eventName,
        isLoading,
		icon,
        money,
        setIcon,
		onChange,
        numOnChange,
		onSubmit,
	};
}