import { ChevronUp } from "lucide-react";

interface MovieTitleProps {
    title: string;
    isExpanded: boolean;
    expandCard: () => void;
}

export default function MovieTitle({ title, isExpanded, expandCard }: MovieTitleProps) {
    return (
        <div>
            <h3 className='leading-5 font-semibold font-sans mb-3'>{title}</h3>
            <span
                className='font-semibold text-sm w-fit hover:underline cursor-pointer'
                onClick={expandCard}
            >
                Mais detalhes
                <ChevronUp className={`inline size-4 align-top mt-0.5 transition ${isExpanded ? 'rotate-180' : ''}`} />
            </span>
        </div>
    )
}