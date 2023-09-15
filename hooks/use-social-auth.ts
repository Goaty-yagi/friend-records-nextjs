import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { setAuth } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';

export default function useSocialAuth(authenticate: any, provider: string) {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const searchParams = useSearchParams();

	const effectRan = useRef(false);

	useEffect(() => {
		const state = searchParams.get('state');
		const code = searchParams.get('code');

		if (state && code && !effectRan.current) {
			authenticate({ provider, state, code })
				.unwrap()
				.then(() => {
					dispatch(setAuth());
					router.push('/dashboard');
					toast.success('Logged in');
				})
				.catch(() => {
					toast.error('Failed to log in. This Email might exist already.');
					router.push('/auth/login');
				});
		}

		return () => {
			effectRan.current = true;
		};
	}, [authenticate, provider]);
}