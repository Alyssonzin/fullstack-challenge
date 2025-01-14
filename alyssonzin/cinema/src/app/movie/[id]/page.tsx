"use client";
import { useEffect } from "react";
import { apiTMDB } from "../../../api/api";

interface Movie {

}

interface MoviePageProps {
    params: {
        id: number;
    }
}

export default function MoviePage({ params }: MoviePageProps) {
    const { id } = params;

    useEffect(() => {
        apiTMDB.get(`/movie/${id}`);
    }, [id]);

    return (
        <main>
            {id}
        </main>
    );
}