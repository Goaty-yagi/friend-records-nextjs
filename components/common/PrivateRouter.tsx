import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";
import { useAppSelector } from "@/redux/hooks";


interface Props {
    children:React.ReactNode
}

export function PrivateRouterWithAuth({children}:Props) {
    const router = useRouter()
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        if(isAuthenticated) {
            router.push('/dashboard')
        } else {
            return setIsMounted(true)
        }
    },[])
    if(isMounted) {
        return (
            <>
            {children}
            </>
        )
    } else {
        return (
            <><Spinner size={'lg'} isCentered={true}/></>
        )
    }
}

export function PrivateRouterWithoutAuth({children}:Props) {
    const router = useRouter()
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        if(!isAuthenticated) {
            router.push('/')
        } else {
            return setIsMounted(true)
        }
    },[])
    if(isMounted) {
        return (
            <>
            {children}
            </>
        )
    } else {
        return (
            <><Spinner size={'lg'} isCentered={true}/></>
        )
    }
}