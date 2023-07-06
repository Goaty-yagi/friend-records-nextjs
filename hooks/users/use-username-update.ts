import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useFriendCreateMutation } from '@/redux/features/friendApiSlice';
import { toast } from 'react-toastify';
import { unshiftFriend } from '@/redux/features/friendSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useUpdateFriendMutation } from '@/redux/features/friendApiSlice';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { usePatchUserMutation } from '@/redux/features/userApiSlice';


export default function useFriendNameUpdate() {
    const { data: user } = useRetrieveUserQuery();
    const [patchUser, { isLoading }] = usePatchUserMutation();
    const [formData, setFormData] = useState({
        username: user ? user.username : '',
    });
    console.log("USER", user)
    // const dispatch = useAppDispatch()
    const { username } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const UID = user ? user.UID : ''
        if (UID) {
            patchUser({ UID, username })
                .unwrap()
                .then((res) => {
                    console.log("res",res)
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