import { useState, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch } from "@/redux/hooks";
import { updateEvent as setUpdateEvent } from '@/redux/features/eventSlice';
import { updateFriendFromEventUpdate } from '@/redux/features/friendSlice';
import { useUpdateEventMutation } from '@/redux/features/eventApiSlice';


export default function useEventMoneyUpdate() {
    const [updateEvent, { isLoading }] = useUpdateEventMutation();
    const dispatch = useAppDispatch()
    const [formData, setFormData] = useState({
        money: 0,
    });
    const [whoPayed, setWhoPayed] = useState('')
    const [defaultMoney, setDefaultMoney] = useState(0)
    const [eventId, setEventId] = useState('')
    const { money } = formData;

    const onChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const resultMoney = whoPayed === '+' ? money : money * -1
        console.log("sub",whoPayed)
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
        setWhoPayed,
        setDefaultMoney,
        onChange,
        onSubmit,
    };
}