export default interface TMDBresults<T> {
    results: T[];
}

export interface CountryIndicativeRating {
    iso_3166_1: string,
    release_dates: {
        certification: string,
        descriptors?: string[],
        type: number,
    }[],
}