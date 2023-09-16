'use client';

import { useSocialAuthenticateMutation } from '@/redux/features/authApiSlice';
import { useSocialAuth } from '@/hooks';
import { Spinner } from '@/components/common';
import { Flex } from '@chakra-ui/react';

export default function Page() {
	const [spotifyAuthenticate] = useSocialAuthenticateMutation();
	useSocialAuth(spotifyAuthenticate, 'spotify');

	return (
		<Flex h={'80vh'} justifyContent={'center'} alignItems={'center'}>
			<Spinner size='lg'/>
		</Flex>
	);
}