// import { apiSlice } from '../services/apiSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FriendState {
	isAuthenticated: boolean;
	isLoading: boolean,
	isThrottled: boolean,
	minutes:number,
	seconds:number
}
const initialState = {
	isLoading: true,
} as FriendState

const friendSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		
		finishInitialLoad: state => {
			state.isLoading = false
		},
	}
})

export const {  finishInitialLoad } = friendSlice.actions
export default friendSlice.reducer