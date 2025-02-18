import { Session } from "../types/Session";
import { apiSpringBoot } from "./api";

export const getSessionsByMovie = async (movieId: string) => {
    const response = await apiSpringBoot.get<Session[]>(`/session/${movieId}`);
    return response.data;
}