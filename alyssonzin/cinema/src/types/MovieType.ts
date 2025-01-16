import ProductionCompany from "./ProductionCompany";

export default interface MovieType {
    id: string,
    title: string,
    original_title: string,
    overview: string,
    poster_path: string,
    vote_average: number,
};

export interface MovieDetails extends MovieType {
    production_companies: ProductionCompany[],
    genres: Genre[],
    runtime: number,
    certification: string,
}

export interface Genre {
    id: number,
    name: string,
}