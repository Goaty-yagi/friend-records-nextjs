import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useEventCreateMutation } from '@/redux/features/eventApiSlice';
import { unshiftEvent } from '@/redux/features/eventSlice';
import { updateEvent as setUpdateEvent } from '@/redux/features/eventSlice';
import { useUpdateEventMutation } from '@/redux/features/eventApiSlice';

export default function useEventIconUpdate() {
    const [updateEvent, { isLoading }] = useUpdateEventMutation();
    const dispatch = useAppDispatch()

    const [icon, setIcon] = useState('')
    const [eventId, setEventId] = useState('')

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateEvent({ id: eventId, icon })
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
        isLoading,
        icon,
        setEventId,
        setIcon,
        onSubmit,
    };
}