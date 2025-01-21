import Image from "next/image";

interface CompanyLogoProps {
    logo_path: string;
}

export default function CompanyLogo({logo_path}: CompanyLogoProps) {
    return (
        <Image
            src={`https://image.tmdb.org/t/p/original${logo_path}`}
            width={100}
            height={100}
            alt="production company logo"
        />
    );
}