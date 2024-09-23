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
      console.log(response);
    })

  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
