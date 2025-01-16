import MovieType, { MovieDetails } from "../types/MovieType";
import TMDBresults from "../types/TMDBresults";
import { apiTMDB } from "./api";

//Retorna filmes em cartaz
export const getNowPlaying = async () => {
    return apiTMDB.get<TMDBresults<MovieType>>('/movie/now_playing', {
        params: {
            language: 'pt-BR',
            region: 'BR',
        }
    }).then(res => {
        return res.data.results;
    });
}

export const getMovieDetails = async (id: string) => {
    //Faz duas requisições ao mesmo tempo.
    const [certificationsResponse, movieDetailsResponse] = await Promise.all([
        apiTMDB.get<TMDBresults<MovieDetails>>(`/movie/${id}/release_dates`).then(res => {
            return res.data.results;
        }),

        apiTMDB.get<MovieType>(`/movie/${id}`, {
            params: {
                language: 'pt-BR',
            }
        })
    ]);

    
}