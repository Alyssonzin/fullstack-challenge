import { IndicativeRatingsHashMap } from "../../types/IndicativeRatings";

interface IndicativeRatingProps {
    certification: string;
}

export default function IndicativeRating({ certification }: IndicativeRatingProps) {
    const element = IndicativeRatingsHashMap.get(certification);

    return (
        <span
            title={element?.text}
            className='flex select-none justify-center items-center min-h-6 min-w-6 rounded font-bold'
            style={{ backgroundColor: element?.color }}>
            {element?.simbol}
        </span>
    )
}