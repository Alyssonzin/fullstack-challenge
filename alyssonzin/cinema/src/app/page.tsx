"use client";

import Image from "next/image";
import Link from "next/link";
import MovieCard from "../components/MovieCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../components/ui/carousel";
import { useState, useEffect } from "react";
import MovieType from "../types/MovieType";
import { getNowPlaying } from "../api/movieRoutes";

export default function Home() {
  const [movies, setMovies] = useState<MovieType[]>();

  useEffect(() => {
    //Isso expõe minha api key no browser. Não é seguro.
    getNowPlaying().then((movies) => {
      setMovies(movies);
    });

  }, []);

  return (
    <div>
      <header className="text-white bg-zinc-600 flex justify-between p-4">
        <Link href="/" className="contents">
          <Image
            src="/cinema-logo.png"
            alt="Cinema"
            width={70}
            height={100}
          />
        </Link>

        <nav className="flex items-center m-4">
          <ul>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="bg-slate-900 min-h-screen">
        <section className="mb-6 p-10">
          <h2 className="text-white select-none font-semibold border-b text-xl w-fit ml-[5%] mb-5">Em Cartaz</h2>
          <div className="flex justify-center">
            <Carousel className="w-[90%]">
              <CarouselContent>
                {
                  movies?.map((movie) => (
                    <CarouselItem key={movie.id} className="basis-1/5">
                      <MovieCard movieProps={movie} />
                    </CarouselItem>
                  ))
                }
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>

    </div>
  );
}
