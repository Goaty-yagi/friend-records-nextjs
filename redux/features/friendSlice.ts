// import { apiSlice } from '../services/apiSlice';
import { EventProps } from "./eventApiSlice"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Events {
	name: string
	friend: string
	money: number
	created_on: string
	icon: string
}
interface FriendResponse {
	id: string
	name: string
	user: string
	sum: number
	birthday: string
	thumbnail: string,
	avatar: string,
	last_log: string,
	created_on: string,
	event: Events[],
	event_length: number,
}

type friendState = {
	friendList: FriendResponse[],
	isLoading: boolean,
	friendId: string,
	friendDetail: FriendResponse
}
interface UpdateFromEventProps {
	caledMoney: number,
	event: EventProps
}

const initialState: friendState = {
	isLoading: true,
	friendList: [],
	friendId: '',
	friendDetail: {} as FriendResponse
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
		unshiftFriend: (state, action: PayloadAction<FriendResponse>) => {
			state.friendList.unshift(action.payload)
		},
		setFriendId: (state, action: PayloadAction<string>) => {
			state.friendId = action.payload
		},
		setFriendDetail: (state, action: PayloadAction<FriendResponse>) => {
			state.friendDetail = action.payload
		},
		updateFriend: (state, action: PayloadAction<Events>) => {
			state.friendDetail.last_log = action.payload.created_on;
			state.friendDetail.sum += Number(action.payload.money);
			state.friendList.forEach((e) => {
				if (e.id === action.payload.friend) {
					e.sum += Number(action.payload.money);
				}

			});
		},
		updateFriendFromEventUpdate: (state, action: PayloadAction<UpdateFromEventProps>) => {
			state.friendDetail.sum += action.payload.caledMoney
			state.friendList.forEach((e) => {
				if (e.id === action.payload.event.friend) {
					e.sum +=action.payload.caledMoney;
				}
			});
		},
		updateFriendFromEventDelete: (state, action: PayloadAction<number>) => {
			state.friendDetail.sum -= Number(action.payload);
		},
		patchFriend: (state, action: PayloadAction<FriendResponse>) => {
			state.friendDetail = action.payload
			for (let i = 0; i < state.friendList.length; i++) {
				if (state.friendList[i].id === action.payload.id) {
					state.friendList.splice(i, 1)
					state.friendList.unshift(action.payload)
					break
				}
			}

		},
		deleteFriend: (state, action: PayloadAction<string>) => {
			state.friendList.forEach((e, index) => {
				if (e.id === action.payload) {
					state.friendList.splice(index, 1)
				}
			})
		},
	}
})

export const { finishInitialLoad, setFriends, unshiftFriend, setFriendId, setFriendDetail, deleteFriend, patchFriend, updateFriend, updateFriendFromEventUpdate, updateFriendFromEventDelete } = friendSlice.actions
export default friendSlice.reducer