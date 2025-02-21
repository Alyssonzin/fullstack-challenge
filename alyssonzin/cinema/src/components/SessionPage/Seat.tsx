"use client";
import { useState } from "react";
import type { Seat } from "../../types/Session";

export default function Seat({ id, number, isOccupied = false, active = true, preSelected = false }: Seat) {
    const [selected, setSelected] = useState(preSelected);

    return (
        <div
            className={`flex justify-center items-center rounded-full select-none w-7 h-7 m-1
                ${active && !isOccupied ? 'cursor-pointer' : 'cursor-default'}
                ${isOccupied ? 'bg-red-500' :
                    selected ? 'bg-yellow-500' : 'bg-gray-500'}`
            }
            id={id}
            onClick={active ? () => setSelected(!selected) : undefined}
        >
            <span className="font-semibold">{number}</span>
        </div>
    );
}