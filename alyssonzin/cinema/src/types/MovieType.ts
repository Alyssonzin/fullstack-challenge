import ProductionCompany from "./ProductionCompany";

export default interface MovieType {
    id: string,
    title: string,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    vote_average: number,
    production_companies?: ProductionCompany[],
    genres?: { id: number, name: string }[],
    runtime?: number,
};