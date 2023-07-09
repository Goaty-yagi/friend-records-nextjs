import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { useUpdateUserMutation } from '@/redux/features/authApiSlice';

export default function useFriendNameUpdate() {
    const { data: user } = useRetrieveUserQuery();
    const [ updateUser, { isLoading }] = useUpdateUserMutation();
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
        const UID = user ? user.UID : ''
        if (UID) {
            console.log("CHE",UID, {username:username})
            updateUser( {UID, username} )
                .unwrap()
                .then((res) => {
                    console.log("res",res,username)
                    toast.success('Syccessfully updated!');
                })
                .catch((e) => {
                    const firstErrorMsg = Object.values(e.data)[0]
                    toast.error('Failed to update!' + '\n' + firstErrorMsg);
                });

        }
    };

    return {
        username,
        isLoading,
        onChange,
        onSubmit,
    };
}