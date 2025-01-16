"use client";
import MovieCard from "../components/MovieCard/MovieCard";
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
      <main className="min-h-screen">
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
