"use client";

import { useEffect } from "react";
import { useAppSelector } from '@/redux/hooks';
import { useAppDispatch } from '@/redux/hooks';
import { resetIsThrottled, setThrottle } from '@/redux/features/authSlice';
import { wrap } from "popmotion";


interface Props {
    min:number,
    sec:number
}

export function countdown({min, sec}:Props) {
    const cSec = wrap(0, 59, sec - 1);
    const cMin = wrap(0, 59, sec===0?min-1:min);
    return {cMin, cSec}
}
 
export default function Throttle() {
    const { isThrottled, minutes, seconds } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(isThrottled) {
            const intervalId = setInterval(() => {
                const min = minutes
                const sec = seconds
                const {cMin, cSec} = countdown({min, sec})
                dispatch(setThrottle({minutes:cMin, seconds:cSec}))
                if(cMin===0&&cSec===0) {dispatch(resetIsThrottled())}
            }, 1000);
            return () => clearInterval(intervalId);

        }
    },[seconds])

    if(isThrottled) {
        const showMinutes = minutes < 10 ? '0' + minutes : minutes
        const showSeconds = seconds < 10 ? '0' + seconds : seconds
        const text = "Please try again in "
        return (
            <>
            {text}
            {showMinutes}:{showSeconds}
            </>
        )
    } else {
        return <></>
    }
}