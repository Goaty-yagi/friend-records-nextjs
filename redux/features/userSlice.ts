// import { apiSlice } from '../services/apiSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type UserState = {
    isLoading:boolean,
}

const initialState: UserState = {
	isLoading: true,
} 

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		finishInitialLoad: state => {
			state.isLoading = false
		},
	}
})

export const {  finishInitialLoad  } = userSlice.actions
export default userSlice.reducer