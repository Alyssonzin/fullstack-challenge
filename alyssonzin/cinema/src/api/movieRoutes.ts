import TMDBresponse from "../types/TMDBresponse";
import { apiTMDB } from "./api";

//Retorna filmes em cartaz
export const getNowPlaying = async () => {
    return apiTMDB.get<TMDBresponse>('/now_playing', {
        params: {
            language: 'pt-BR',
            region: 'BR',
        }
    }).then(res => {
        return res.data.results;
    });
}