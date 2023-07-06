import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useEventCreateMutation } from '@/redux/features/eventApiSlice';
import { unshiftEvent } from '@/redux/features/eventSlice';
import { updateEvent as setUpdateEvent } from '@/redux/features/eventSlice';
import { useUpdateEventMutation } from '@/redux/features/eventApiSlice';

export default function useEventUpdate() {
    const [updateEvent, { isLoading }] = useUpdateEventMutation();
    const dispatch = useAppDispatch()
    const [formData, setFormData] = useState({
        eventName: '',
        whoPayed: '',
        money: 0
    });

    const [icon, setIcon] = useState('')
    const [eventId, setEventId] = useState('')
    const { eventName, whoPayed, money } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const CustomMoney = whoPayed === '+' ? money : money * -1
        updateEvent({ name: eventName, id: eventId, icon, money: CustomMoney })
            .unwrap()
            .then((res) => {
                dispatch(setUpdateEvent(res))
                // dispatch(updateFriend(res))
                toast.success('Syccessfully updated!');
            })
            .catch((e) => {
                const firstErrorMsg = Object.values(e.data)[0]
                toast.error('Failed to update a event' + '\n' + firstErrorMsg);
            });
    };

    return {
        eventName,
        whoPayed,
        isLoading,
        icon,
        money,
        setEventId,
        setIcon,
        onChange,
        onSubmit,
    };
}