import { FormEvent } from 'react'

interface FormProps {
    children:React.ReactNode
    button:any
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function AbstractForm({children,button, onSubmit}:FormProps) {
    return (
        <>
        <form onSubmit={onSubmit}>
        {children}
        {/* {button} */}
        </form>
        </>
    )
}