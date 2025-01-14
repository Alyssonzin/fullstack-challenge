"use client";
import Image from "next/image";
import MovieType from "../types/MovieType";
import { ChevronUp } from 'lucide-react';
import Link from "next/link";
import { useRef, useState } from "react";

interface MovieCardProps {
    movieProps: MovieType;
}

export default function MovieCard({ movieProps: movie }: MovieCardProps) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const refContent = useRef<HTMLDivElement>(null);

    function expandCard() {
        setIsExpanded(!isExpanded);
    }

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
                <span
                    className='font-semibold text-sm w-fit hover:underline cursor-pointer'
                    onClick={expandCard}
                >
                    Mais detalhes
                    <ChevronUp className={`inline size-4 align-top mt-0.5 transition ${isExpanded ? 'rotate-180' : ''}`} />
                </span>
            </div>
            <div
                ref={refContent}
                className='overflow-hidden transition-all duration-300'
                style={{
                    height: isExpanded ? `${refContent.current?.scrollHeight}px` : '0px',
                }}
            >
                <p className='mt-3'>{movie.overview}</p>
            </div>
        </article>
    );
}