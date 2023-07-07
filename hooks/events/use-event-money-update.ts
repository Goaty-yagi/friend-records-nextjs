import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useEventCreateMutation } from '@/redux/features/eventApiSlice';
import { unshiftEvent } from '@/redux/features/eventSlice';
import { updateEvent as setUpdateEvent } from '@/redux/features/eventSlice';
import { updateFriendFromEventUpdate } from '@/redux/features/friendSlice';
import { useUpdateEventMutation } from '@/redux/features/eventApiSlice';


export default function useEventMoneyUpdate() {
    const [updateEvent, { isLoading }] = useUpdateEventMutation();
    const dispatch = useAppDispatch()
    const [formData, setFormData] = useState({
        money: 0,
        whoPayed: '',
    });
    const [ defaultMoney, setDefaultMoney] = useState(0)
    const [eventId, setEventId] = useState('')
    const { money, whoPayed } = formData;

    const onChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const resultMoney = whoPayed === '+' ? money : money * -1
        updateEvent({ id: eventId, money: resultMoney })
            .unwrap()
            .then((res) => {
                dispatch(setUpdateEvent(res))
                dispatch(updateFriendFromEventUpdate(res.money - defaultMoney))
                toast.success('Syccessfully updated!');
            })
            .catch((e) => {
                const firstErrorMsg = Object.values(e.data)[0]
                toast.error('Failed to update a event' + '\n' + firstErrorMsg);
            });
    };

    return {
        money, 
        whoPayed,
        isLoading,
        setEventId,
        setDefaultMoney,
        onChange,
        onSubmit,
    };
}