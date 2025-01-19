import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const robotApi = createApi({
    reducerPath: 'robotApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4040/' }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => `robot/`,
        }),
        getDataById: builder.query({
            query: (id) => `robot/${id}`,
        }),
        postData: builder.mutation({
            query:(newData)=>({
                url:"robot",
                method:"POST",
                body:newData,
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                }
            })
        }),
        deleteData: builder.mutation({
            query:(id)=>({
                url:`robot/${id}`,
                method:"DELETE"
            })
        })
    }),
})

export const { useGetDataQuery,useGetDataByIdQuery,usePostDataMutation,useDeleteDataMutation } = robotApi