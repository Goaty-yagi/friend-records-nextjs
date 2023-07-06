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
		updateEvent: (state, action: PayloadAction<EventProps>) => {
			// need to think about money calcurations
			// state.friendDetail.sum += Number(action.payload.money);
			for(let i=0; i < state.eventList.length; i++) {
				if (state.eventList[i].id === action.payload.id) {
					state.eventList.splice(i,1)
					state.eventList.splice(i,0,action.payload)
					break
				}
			}
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

export const {  finishInitialLoad, setEventList, unshiftEvent, deleteEvent, updateEvent  } = eventSlice.actions
export default eventSlice.reducer