import Image from "next/image";

interface MoviePosterProps {
    poster_path: string;
    title: string;
}

export default function MoviePoster({ poster_path, title }: MoviePosterProps) {
    return (
        <Image
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
            width={500}
            height={500}
        />
    )
}