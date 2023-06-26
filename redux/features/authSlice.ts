// import { apiSlice } from '../services/apiSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
	isAuthenticated: boolean;
	isLoading: boolean,
	isThrottled: boolean,
	minutes:number,
	seconds:number
}
interface Props {
	minutes:number,
	seconds:number
}
const initialState = {
	isAuthenticated: false,
	isLoading: true,
	isThrottled: false,
	minutes:0,
	seconds:0
} as AuthState

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: state => {
			state.isAuthenticated = true
		},
		logout: state => {
			state.isAuthenticated = false
		},
		finishInitialLoad: state => {
			state.isLoading = false
		},
		setIsThrottled: state => {
			state.isThrottled = true
		},
		resetIsThrottled: state => {
			state.isThrottled = false
		},
		setThrottle: (state, action: PayloadAction<Props>) => {
			state.minutes = action.payload.minutes
			state.seconds = action.payload.seconds
		}		
	}
})

export const { setAuth, logout, finishInitialLoad,setIsThrottled, resetIsThrottled, setThrottle } = authSlice.actions
export default authSlice.reducer