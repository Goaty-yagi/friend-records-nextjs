import { apiSlice } from '../services/apiSlice';

const friendApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		friendCreate: builder.mutation({
			query: ({ name, user }) => ({
				url: '/friend-create/',
				method: 'POST',
				body: { name, user },
			}),
		}),
		friendList: builder.mutation({
			query: () => ({
				url: '/user-friend/',
				method: 'POST',
			}),
		}),
		friendDetail: builder.mutation({
			query: (id) => ({
				url: `/friend-detail/${id}`,
				method: 'GET',
			}),
		}),
		birthdayUpdate: builder.mutation({
			query: ({year, month, day, id}) => ({
				url: '/logout/',
				method: 'POST',
				body: { year, month, day, id },
			}),
		}),
	}),
});

export const {
	useFriendCreateMutation,
	useFriendListMutation,
	useFriendDetailMutation,
	useBirthdayUpdateMutation,
} = friendApiSlice;