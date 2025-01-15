import { getMovieDetails } from "../../api/movieRoutes";

export async function GET({ params }: { params: { movieId: string } }) {
    const { movieId } = params;
    const movieDetails = await getMovieDetails(movieId);

    return movieDetails;
}