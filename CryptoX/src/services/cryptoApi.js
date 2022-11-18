import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '11a713515dmshbe6bb59cf54bccep175129jsnb9f6d03484fc',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        })
    })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinlore-cryptocurrency.p.rapidapi.com/api/exchanges/',
//     headers: {
//       'X-RapidAPI-Key': '11a713515dmshbe6bb59cf54bccep175129jsnb9f6d03484fc',
//       'X-RapidAPI-Host': 'coinlore-cryptocurrency.p.rapidapi.com'
//     }
//   };