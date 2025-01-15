import MovieType from "../types/MovieType";
import TMDBlistMovies from "../types/TMDBresponse";
import { apiTMDB } from "./api";

//Retorna filmes em cartaz
export const getNowPlaying = async () => {
    return apiTMDB.get<TMDBlistMovies>('/now_playing', {
        params: {
            language: 'pt-BR',
            region: 'BR',
        }
    }).then(res => {
        return res.data.results;
    });
}

export const getMovieDetails = async (id: string) => {
    return apiTMDB.get<MovieType>(`/${id}`, {
        params: {
            language: 'pt-BR',
        }
    }).then(res => {
        return res.data;
    })
}