// import { apiSlice } from '../services/apiSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Events {
	name:string
	friend:number
	money:number
	created_on:string
	icon:string
}
interface FriendResponse {
	id:string
	name:string
	user:string
	sum: number
	birthday:string
	thumbnail:string,
	avatar:string,
	last_log:string,
	created_on:string,
	event:Events[],
	event_length:number,
}

type friendState = {
	friendList:FriendResponse[],
	isLoading:boolean,
}

const initialState:friendState = {
	isLoading: true,
	friendList: [],
} 

const friendSlice = createSlice({
	name: 'friend',
	initialState,
	reducers: {
		finishInitialLoad: state => {
			state.isLoading = false
		},
		setFriends: (state, action: PayloadAction<FriendResponse[]>) => {
			state.friendList = action.payload
		},
		unshiftFriend:(state, action: PayloadAction<FriendResponse>) => {
			state.friendList.unshift(action.payload)
		},		
	}
})

export const {  finishInitialLoad, setFriends, unshiftFriend } = friendSlice.actions
export default friendSlice.reducer