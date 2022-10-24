import  {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazanCoreApi = createApi({
    reducerPath:'shazanCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) =>{
            headers.set('X-RapidAPI-Key','4784af1bbdmsh84fb2b73ff2c3fcp189c44jsnfd28465d726e')
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world'}),
        getSongByCountry: builder.query({query: (countryCode) => `/charts/country?country_code=${countryCode}`}),
        getSongsByGenre: builder.query({query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
        getSongsBySearch: builder.query({query: (searchTerm) => `search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
    }),
});  
export const {
    useGetSongsByGenreQuery,
    useGetTopChartsQuery,
    useGetSongByCountryQuery,
    useGetSongsBySearchQuery,
} = shazanCoreApi;