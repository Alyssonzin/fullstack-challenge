import axios from "axios";

export const apiTMDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN_BEARER!}`
    }
});