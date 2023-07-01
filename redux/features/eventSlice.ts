// import { apiSlice } from '../services/apiSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Event {
	name:string
	friend:string
	money:number
	created_on:string
	icon:string
}
type EventState = {
    isLoading:boolean,
    eventList:Event[]
}

const initialState: EventState = {
	isLoading: true,
    eventList: []
} 

const eventSlice = createSlice({
	name: 'event',
	initialState,
	reducers: {
		finishInitialLoad: state => {
			state.isLoading = false
		},
        setEventList: (state, action: PayloadAction<Event[]>) => {
			state.eventList = action.payload
		},
		unshiftEvent: (state, action: PayloadAction<Event>) => {
			state.eventList.unshift(action.payload)
		},
	}
})

export const {  finishInitialLoad, setEventList, unshiftEvent  } = eventSlice.actions
export default eventSlice.reducer