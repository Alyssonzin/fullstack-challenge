import { apiTMDB } from "./api";

//Retorna filmes em cartaz
export const getNowPlaying = async () => {
    return apiTMDB.get('/now_playing', {
        params: {
            language: 'pt-BR',
        }
    }).then(res => {
        return res
    }).catch(error => {
        throw error;
    });
}