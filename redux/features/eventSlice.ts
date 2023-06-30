// import { apiSlice } from '../services/apiSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Events {
	name:string
	friend:number
	money:number
	created_on:string
	icon:string
}


const initialState = {
	isLoading: true,
} 

const eventSlice = createSlice({
	name: 'event',
	initialState,
	reducers: {
		finishInitialLoad: state => {
			state.isLoading = false
		},
	}
})

export const {  finishInitialLoad  } = eventSlice.actions
export default eventSlice.reducer