// import { apiSlice } from '../services/apiSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { EventProps } from "./eventApiSlice"

type EventState = {
    isLoading:boolean,
    eventList:EventProps[]
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
        setEventList: (state, action: PayloadAction<EventProps[]>) => {
			state.eventList = action.payload
		},
		unshiftEvent: (state, action: PayloadAction<EventProps>) => {
			state.eventList.unshift(action.payload)
		},
		deleteEvent: (state, action: PayloadAction<string>) => {
			state.eventList.forEach((e, index) => {
				if(e.id === action.payload) {
					state.eventList.splice(index,1)
				}
			})
		},
	}
})

export const {  finishInitialLoad, setEventList, unshiftEvent, deleteEvent  } = eventSlice.actions
export default eventSlice.reducer