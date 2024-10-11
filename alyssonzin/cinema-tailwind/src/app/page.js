"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const API_KEY = "ba3b4636b70e3617b291d60e4c3112eb";

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: API_KEY,
        language: 'pt-br'
      }
    }).then((response) => {
      setMovies(response.data.results);
    })

  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Filmes em cartaz</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full" />
            <div className="p-4">
              <h2 className="font-bold text-xl">{movie.title}</h2>
              <p className="text-gray-500">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
