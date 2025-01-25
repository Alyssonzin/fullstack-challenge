import axios from "axios";

//Comunica-se com a API do TMDB
export const apiTMDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN_BEARER!}`
    }
});

//Comunica-se com o backend
export const apiSpringBoot = axios.create({
    baseURL: 'http://localhost:8080',
})