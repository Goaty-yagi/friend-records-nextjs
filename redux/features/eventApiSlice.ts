import { apiSlice } from '../services/apiSlice';

interface Events {
	name:string
	friend:number
	money:number
	created_on:string
	icon:string
}

interface EventArgs {
	name:string
	friend:string|any
    money:number
    icon:string
}

const eventApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		eventCreate: builder.mutation<Events,EventArgs>({
			query: ({ name, friend, money, icon }) => ({
				url: '/event-create/',
				method: 'POST',
				body: { name, friend, money, icon },
			}),
		}),
		getEventList: builder.mutation<Events[], string>({
			query: (id) => ({
				url: '/event-userlist/',
				method: 'POST',
                body: { id },
			}),
		}),
	}),
});

export const {
	useEventCreateMutation,
	useGetEventListMutation,
} = eventApiSlice;