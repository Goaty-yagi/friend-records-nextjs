import { apiSlice } from '../services/apiSlice';

interface UserArgs {
	username:string
	UID:string
	email:string
}


const userApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		patchUser: builder.mutation({
			query: ({ UID, ...props }) => ({
				url: `/user-retrieve/${UID}`,
				method: 'PATCH',
				body: { ...props },
			}),
		}),
	}),
});

export const {
	usePatchUserMutation,
} = userApiSlice;