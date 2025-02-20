"use client";
import { useState } from "react";
import type { Seat } from "../../types/Session";

interface SeatProps {
    id: string,
    isOccupied: boolean,
    number: number,
}

export default function Seat({ id, isOccupied, number }: SeatProps) {
    const [selected, setSelected] = useState(false);

    return (
        <div className="flex items-center justify-center">
            <div className={`flex justify-center items-center rounded-full select-none w-7 h-7 m-1 cursor-pointer
                ${isOccupied ? 'bg-red-500' :
                    selected ? 'bg-yellow-500' : 'bg-gray-500'}`}
                id={id}
                onClick={() => setSelected(!selected)}
            >
                <span className="font-semibold">{number}</span>
            </div>
        </div>
    );
}