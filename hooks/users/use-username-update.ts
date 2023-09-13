import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { useUpdateUserMutation } from '@/redux/features/authApiSlice';
import { setModalSpinner } from "@/redux/features/authSlice";
import { useDispatch } from 'react-redux';

export default function useFriendNameUpdate() {
    const { data: user } = useRetrieveUserQuery();
    const [updateUser, { isLoading }] = useUpdateUserMutation();
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        username: user ? user.username : '',
    });
    const { username } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setModalSpinner(true))
        updateUser({ username })
            .unwrap()
            .then(() => {
                toast.success('Successfully updated!');
                dispatch(setModalSpinner(false))
            })
            .catch((e) => {
                const firstErrorMsg = Object.values(e.data)[0]
                toast.error('Failed to update!' + '\n' + firstErrorMsg);
                dispatch(setModalSpinner(false))
            });
    };

    return {
        username,
        isLoading,
        onChange,
        onSubmit,
    };
}