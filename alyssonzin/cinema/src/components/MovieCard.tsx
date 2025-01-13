import Image from "next/image";
import MovieCardProps from "../types/MovieCardProps";
import { ChevronUp } from 'lucide-react';
import Link from "next/link";

export default function MovieCard({ movieProps: movie }: MovieCardProps) {
    return (
        <article className="select-none bg-slate-300 shadow-md border border-gray-400 hover:bg-slate-400 transition rounded p-2">
            <div className="mb-2">
                <Link href={`/movie/${movie.id}`}>
                    <Image
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt={movie.title}
                        width={500}
                        height={500}
                    />
                </Link>
            </div>
            <div>
                <h3 className='leading-5 font-semibold font-sans mb-3'>{movie.title}</h3>
                <span className='font-semibold text-sm w-fit hover:cursor-pointer hover:underline'>
                    Mais detalhes
                    <ChevronUp className="inline size-4 align-top mt-0.5" />
                </span>
            </div>

        </article>
    );
}