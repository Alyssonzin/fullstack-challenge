import { IndicativeRatingsHashMap } from "../../types/IndicativeRatings";

interface IndicativeRatingProps {
    certification: string;
    descriptors?: string[];
}

export default function IndicativeRating({ certification }: IndicativeRatingProps) {
    const element = IndicativeRatingsHashMap.get(certification);

    return (
        <span className={`flex justify-center items-center min-h-6 min-w-6 rounded font-bold ${element?.color || 'bg-green-500'}`}>
            {certification}
        </span>
    )
}