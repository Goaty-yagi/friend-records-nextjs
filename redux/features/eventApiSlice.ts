import { apiSlice } from '../services/apiSlice';

export interface EventProps {
	id:string
	name:string
	friend:string
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
		eventCreate: builder.mutation<EventProps,EventArgs>({
			query: ({ name, friend, money, icon }) => ({
				url: '/event-create/',
				method: 'POST',
				body: { name, friend, money, icon },
			}),
		}),
		getEventList: builder.mutation<EventProps[], string>({
			query: (id) => ({
				url: '/event-userlist/',
				method: 'POST',
                body: { id },
			}),
		}),
		deleteEvent: builder.mutation({
			query: (id) => ({
				url: `/event-detail/${id}`,
				method: 'DELETE',
			}),
		}),
		updateEvent: builder.mutation({
			query: ({id, ...props}) => ({
				url: `/event-detail/${id}`,
				method: 'PATCH',
				body: { ...props },
			}),
		}),
	}),
});

export const {
	useEventCreateMutation,
	useGetEventListMutation,
	useDeleteEventMutation,
	useUpdateEventMutation
} = eventApiSlice;