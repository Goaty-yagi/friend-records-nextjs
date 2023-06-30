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
	friend:string
}

const eventApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		eventCreate: builder.mutation<Events,EventArgs>({
			query: ({ name, friend }) => ({
				url: '/event-create/',
				method: 'POST',
				body: { name, friend },
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