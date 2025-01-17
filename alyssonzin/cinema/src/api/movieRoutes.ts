import MovieType, { MovieDetails } from "../types/MovieType";
import TMDBresults, { CountryIndicativeRating } from "../types/TMDBresults";
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
    try {
        return apiTMDB.get<MovieDetails>(`/movie/${id}`, {
            params: {
                language: 'pt-BR',
            }
        }).then(res => res.data);
    } catch (error) {
        throw error;
    }
}

export const getIndicativeRating = async (id: string) => {
    try {
        return apiTMDB.get<TMDBresults<CountryIndicativeRating>>(`/movie/${id}/release_dates`).then(res => {
            //Busca a classificação indicativa do Brasil
            const brazilIndicativeRating = res.data.results.find(country => country.iso_3166_1 === 'BR');

            //Busca o primeiro release_date que seja do tipo 3 (filme), trazendo a classificação indicativa.
            if (brazilIndicativeRating) {
                return brazilIndicativeRating.release_dates.find(release => release.type === 3);
            }
        })
    } catch (error) {
        throw error;
    }
}