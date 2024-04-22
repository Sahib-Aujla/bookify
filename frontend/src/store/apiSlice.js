import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints(builder) {
    return {
      getAllBooks: builder.query({
        query: () => "/allbooks",
      }),
      sendMessage: builder.mutation({
        query: (message) => ({
          url: "/message",
          method: "POST",
          body: message,
        }),
      }),
      getBook: builder.query({
        query: (id) => `/book/${id}`,
      }),
      sendBook: builder.mutation({
        query: (message) => ({
          url: "/sendbook",
          method: "POST",
          body: message,
        }),
      }),
    };
  },
});

export const { useGetAllBooksQuery, useSendMessageMutation, useGetBookQuery, useSendBookMutation } =
  apiSlice;

export default apiSlice;
