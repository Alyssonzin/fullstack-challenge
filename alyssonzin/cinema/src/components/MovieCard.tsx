import Image from "next/image";
import MovieCardProps from "../types/MovieCardProps";

export default function MovieCard({ movieProps: movie }: MovieCardProps) {
    return (
        <article className="border">
            <div>
                <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    width={500}
                    height={500}
                />
            </div>
            <p>{movie.title}</p>
            <p>2h.</p>
            <button>Mais detalhes</button>
        </article>
    );
}