import { FormEvent } from 'react'

interface FormProps {
    children:React.ReactNode
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function AbstractForm({children, onSubmit}:FormProps) {
    return (
        <>
        <form onSubmit={onSubmit}>
        {children}
        </form>
        </>
    )
}