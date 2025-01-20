import { getIndicativeRating, getMovieDetails } from "../../api/movieRoutes";
import Genres from "../../components/MoviePage/Genres";
import IndicativeRating from "../../components/MoviePage/IndicativeRating";
import MoviePoster from "../../components/MoviePoster";
import CompanyLogo from "../../components/CompanyLogo";
import ProductionCompanies from "../../components/MoviePage/ProductionCompanies";

interface Props {
    params: Promise<{ movieId: string }>,
}

function fetchMovie(movieId: string) {
    return getMovieDetails(movieId);
}

function fetchIndicativeRating(movieId: string) {
    return getIndicativeRating(movieId);
}

export default async function MoviePage({ params }: Props) {
    const { movieId } = await params;
    const movie = await fetchMovie(movieId);
    const indicativeRating = await fetchIndicativeRating(movieId);

    return (
        <main className="min-h-screen text-white">
            <div className="flex bg-slate-950 p-10">
                <div className="w-1/6 mr-5">
                    <MoviePoster
                        title={movie.title}
                        poster_path={movie.poster_path}
                    />
                </div>
                <div className="w-1/2">
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold mb-3">{movie.title}</h2>
                        <hr className="mb-5" />
                        <div className="flex items-center space-x-5 mb-3 text-sm">
                            {
                                indicativeRating &&
                                <IndicativeRating certification={indicativeRating.certification} />
                            }
                            <span className="pr-5 border-r-gray-500 border-r">{movie.runtime} min</span>
                            <Genres genres={movie.genres!} />
                        </div>
                    </div>
                    <p>{movie.overview}</p>
                </div>

                <div className="ml-auto mr-auto">
                    <ProductionCompanies companies={movie.production_companies} />
                </div>
            </div>
        </main>
    );
}