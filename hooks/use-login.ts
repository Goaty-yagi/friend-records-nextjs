import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { useLoginMutation } from '@/redux/features/authApiSlice';
import { setAuth } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';
import { setIsThrottled, setThrottle } from '@/redux/features/authSlice';
import { throttleCalculation } from '@/components/utils';

export default function useLogin() {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [login, { isLoading }] = useLoginMutation();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		login({ email, password })
			.unwrap()
			.then(() => {
				dispatch(setAuth());
				toast.success('Logged in');
				router.push('/dashboard');
			})
			.catch((e) => {
				console.log("ERROR", e.status, e.data)
				const data = e.data.detail
				const status = e.status
				const throttleData = throttleCalculation({ data, status })
				if (throttleData.isError) {
					const minutes = throttleData.minutes
					const seconds = throttleData.seconds
					dispatch(setIsThrottled())
					dispatch(setThrottle({minutes, seconds}))
				}
				toast.error('Failed to log in');
			});
	};

	return {
		email,
		password,
		isLoading,
		onChange,
		onSubmit,
	};
}