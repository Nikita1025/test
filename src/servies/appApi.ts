import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {getActions} from "./appSlice";
import {CreateEntityType, CreateStringType, DeleteType, ResponseDataType, UpdateStringType} from './appApi.types';


export const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://185.244.172.108:8081/v1/outlay-rows/entity/'}),
    tagTypes: ['Strings'],
    endpoints: builder => ({
        createEssence: builder.mutation<CreateEntityType, void>({
            query: () => ({
                method: 'POST',
                url: 'create',
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(getActions.getId(data))
                } catch (e) {
                    console.error(e)
                }
            },
            extraOptions: {maxRetries: false},
        }),
        getTreeRows: builder.query<ResponseDataType[], number>({
            query: (id: number) => ({
                method: 'GET',
                url: `${id}/row/list`
            }),
            providesTags: ['Strings'],

        }),
        createSting: builder.mutation({
            query: (data: CreateStringType) => ({
                method: 'POST',
                url: `${data.id}/row/create`,
                body: data.dataForm,
            }),
            invalidatesTags: ["Strings"],
        }),
        changeSting: builder.mutation({
            query: (data: UpdateStringType)=> ({
                method: 'POST',
                url: `${data.id}/row/${data.rId}/update`,
                body: data.dataForm
            }),
            invalidatesTags: ["Strings"],
        }),
        deleteString: builder.mutation({
            query: (data: DeleteType)=>({
                method: 'DELETE',
                url:`${data.id}/row/${data.rId}/delete`
            }),
            invalidatesTags: ["Strings"],
        })
    })
})
export const {
    useCreateEssenceMutation,
    useGetTreeRowsQuery,
    useCreateStingMutation,
    useChangeStingMutation,
    useDeleteStringMutation
} = appApi
