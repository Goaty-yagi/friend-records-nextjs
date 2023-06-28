// import { apiSlice } from '../services/apiSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
	isLoading: true,
} 

const friendSlice = createSlice({
	name: 'friend',
	initialState,
	reducers: {
		finishInitialLoad: state => {
			state.isLoading = false
		},
	}
})

export const {  finishInitialLoad } = friendSlice.actions
export default friendSlice.reducer