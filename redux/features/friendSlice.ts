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
interface isLoadingsTyps {
	avatar: boolean,
	birthday: boolean,
	name: boolean
}

type friendState = {
	friendList: FriendResponse[],
	isLoading: boolean,
	friendId: string,
	friendDetail: FriendResponse,
	isLoadings: isLoadingsTyps
}
interface UpdateFromEventProps {
	caledMoney: number,
	event: EventProps
}

interface isLoadingsProps {
	type:string,
	condition: boolean
}

const initialState: friendState = {
	isLoading: false,
	friendList: [],
	friendId: '',
	friendDetail: {} as FriendResponse,
	isLoadings: {
		avatar: false,
		birthday: false,
		name: false
	} as isLoadingsTyps,
}

const friendSlice = createSlice({
	name: 'friend',
	initialState,
	reducers: {
		setIsLoadingFalse: state => {
			state.isLoading = false
		},
		setIsLoadingTrue: state => {
			state.isLoading = true
		},
		setIsLoadings: (state, action: PayloadAction<isLoadingsProps>) => {
			// state.isLoadings[action.payload.type]
			switch(action.payload.type){
				case 'avatar':
					state.isLoadings.avatar = action.payload.condition
				case 'name':
					state.isLoadings.name = action.payload.condition
				case 'birthday':
					state.isLoadings.birthday = action.payload.condition
			}
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
		updateFriendFromEventCreation: (state, action: PayloadAction<Events>) => {
			state.friendDetail.last_log = action.payload.created_on;
			state.friendDetail.sum += Number(action.payload.money);
			state.friendList.forEach((e) => {
				if (e.id === action.payload.friend) {
					e.sum += Number(action.payload.money);
					e.last_log = action.payload.created_on
					e.event_length += 1
				}

			});
		},
		updateFriendFromEventUpdate: (state, action: PayloadAction<UpdateFromEventProps>) => {
			state.friendDetail.sum += action.payload.caledMoney
			state.friendList.forEach((e) => {
				if (e.id === action.payload.event.friend) {
					e.sum += action.payload.caledMoney;
				}
			});
		},
		updateFriendFromEventDelete: (state, action: PayloadAction<{ money: number, id: string }>) => {
			state.friendDetail.sum -= Number(action.payload.money);
			state.friendList.forEach((e, index) => {
				if (e.id === action.payload.id) {
					e.sum -= action.payload.money;
					e.event_length -= 1
				}
			})
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

export const { setIsLoadingFalse, setIsLoadingTrue, setIsLoadings, setFriends, unshiftFriend, setFriendId, setFriendDetail, deleteFriend, patchFriend, updateFriendFromEventCreation, updateFriendFromEventUpdate, updateFriendFromEventDelete } = friendSlice.actions
export default friendSlice.reducer