import { useRef } from "react";

interface MovieDetailsProps {
    isExpanded: boolean;
    overview: string;
}
export default function MovieDetails({ isExpanded, overview }: MovieDetailsProps) {
    const refContent = useRef<HTMLDivElement>(null);
    return (
        <div
            ref={refContent}
            className="overflow-hidden transition-all duration-300"
            style={{
                height: isExpanded ? `${refContent.current?.scrollHeight}px` : '0px',
            }}
        >
            <p className="mt-3">{overview}</p>
        </div>
    );
}