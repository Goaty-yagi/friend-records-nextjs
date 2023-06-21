'use client';

import { usePathname } from 'next/navigation';
// import { Disclosure } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useLogoutMutation } from '@/redux/features/authApiSlice';
import { logout as setLogout } from '@/redux/features/authSlice';
// import { NavLink } from '@/components/common';

import {  Image, Flex, Button,  HStack , chakra } from '@chakra-ui/react';
import Link from 'next/link';

import Logo from '@/public/vercel.svg';

const CTA = "Get Started"


export default function Navbar() {
    const pathname = usePathname();
	const dispatch = useAppDispatch();

	const [logout] = useLogoutMutation();
    const { isAuthenticated } = useAppSelector(state => state.auth);

	const handleLogout = () => {
		logout(undefined)
			.unwrap()
			.then(() => {
				dispatch(setLogout());
			});
	};

	const isSelected = (path: string) => (pathname === path ? true : false);
    const data = (isAuthenticated:boolean) => {
        console.log("CHECK", isAuthenticated)
        return [
            {
                text:'Home',
                path:'/',
                isVisible:true
            },
            {
                text:'Login',
                path:'/auth/login',
                isVisible:!isAuthenticated
            },
            {
                text:'Register',
                path:'/auth/register',
                isVisible:!isAuthenticated
            },
    
        ]
    }

  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
      >
        <Image src={Logo.src} h="50px" />
        
        <HStack as="nav" spacing="5">
          {data(isAuthenticated).map((item, i) => (
            item.isVisible && (<Link key={i} href={item.path}>
                <Button variant="nav"> {item.text} </Button>
              </Link>)
          ))}
        </HStack>
        <HStack>
          <Button>
            {CTA}
          </Button>
        </HStack>
        
      </Flex>
    </chakra.header>
  );
}