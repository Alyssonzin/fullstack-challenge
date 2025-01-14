"use client";
import MovieType from "../../types/MovieType";
import Link from "next/link";
import { useState } from "react";
import MoviePoster from "../MoviePoster";
import MovieTitle from "./MovieTitle";
import MovieDetails from "./MovieDetails";

interface MovieCardProps {
    movieProps: MovieType;
}

export default function MovieCard({ movieProps: movie }: MovieCardProps) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    function expandCard() {
        setIsExpanded(!isExpanded);
    }

    return (
        <article className="select-none bg-slate-300 shadow-md border border-gray-400 hover:bg-slate-400 transition rounded p-2">
            <div className="mb-2">
                <Link href={`/movie/${movie.id}`}>
                    <MoviePoster
                        poster_path={movie.poster_path}
                        title={movie.title}
                    />
                </Link>
            </div>

            <MovieTitle
                expandCard={expandCard}
                isExpanded={isExpanded}
                title={movie.title}
            />

            <MovieDetails
                isExpanded={isExpanded}
                overview={movie.overview}
            />
        </article>
    );
}