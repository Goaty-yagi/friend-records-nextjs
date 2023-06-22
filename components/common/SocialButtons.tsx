'use client';

import { ImGoogle, ImFacebook } from 'react-icons/im';
import { SocialButton } from '@/components/common';
import { continueWithGoogle, continueWithFacebook } from '@/utils';
import { Flex } from '@chakra-ui/react';
export default function SocialButtons() {
	return (
		<Flex justifyContent={"center"} mt={'1rem'}>
			<SocialButton provider='google' onClick={continueWithGoogle}>
				<ImGoogle className='mr-3' /> Google Signin
			</SocialButton>
			{/* <SocialButton provider='facebook' onClick={continueWithFacebook}>
				<ImFacebook className='mr-3' /> Facebook Signin
			</SocialButton> */}
		</Flex>
	);
}