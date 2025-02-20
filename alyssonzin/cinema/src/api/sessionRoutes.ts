import Session, { Seat } from "../types/Session";
import { apiSpringBoot } from "./api";

export const getSessionsByMovie = async (movieId: string) => {
    try {
        const response = await apiSpringBoot.get<Session[]>(`/session/movie/${movieId}`);
        if (response.data.length === 0) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getSeatsBySession = async (sessionId: string) => {
    try {
        const response = await apiSpringBoot.get<Seat[]>(`/seat/session/${sessionId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}