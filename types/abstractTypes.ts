import { Dispatch, SetStateAction } from "react"

export interface StateStringProps{
    state:string
    setter:Dispatch<SetStateAction<string>>
}

export interface StateBooleanProps{
    state:boolean
    setter:Dispatch<SetStateAction<boolean>>
}

export interface StateNumberProps{
    state:number
    setter:Dispatch<SetStateAction<number>>
}
