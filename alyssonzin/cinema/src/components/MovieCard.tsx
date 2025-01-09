import Image from "next/image";
import MovieType from "../types/MovieType";

export default function MovieCard(movie: MovieType) {
    return (
        <article className="border">
            <div>
                <Image
                    src="/matrix.webp"
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