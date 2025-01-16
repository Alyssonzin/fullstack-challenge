import { getMovieDetails } from "../../api/movieRoutes";

interface Props {
    params: Promise<{ movieId: string }>,
}

function fetchMovie(movieId: string) {
    return getMovieDetails(movieId);
}

export default async function MoviePage({ params }: Props) {
    const { movieId } = await params;
    const movie = await fetchMovie(movieId);

    return (
        <main>
            
        </main>
    );
}