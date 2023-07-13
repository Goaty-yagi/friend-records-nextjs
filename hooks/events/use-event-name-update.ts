import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useEventCreateMutation } from '@/redux/features/eventApiSlice';
import { unshiftEvent } from '@/redux/features/eventSlice';
import { updateEvent as setUpdateEvent } from '@/redux/features/eventSlice';
import { useUpdateEventMutation } from '@/redux/features/eventApiSlice';

export default function useEventNameUpdate() {
    const [updateEvent, { isLoading }] = useUpdateEventMutation();
    const dispatch = useAppDispatch()
    const [formData, setFormData] = useState({
        eventName: '',
    });

    const [eventId, setEventId] = useState('')
    const { eventName } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateEvent({ id: eventId, name: eventName })
            .unwrap()
            .then((res) => {
                // dispatch(setUpdateEvent(res))
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
        isLoading,
        setEventId,
        onChange,
        onSubmit,
    };
}