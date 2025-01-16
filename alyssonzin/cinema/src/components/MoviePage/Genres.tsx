import Genre from "../../types/Genre";

interface GenreProps {
    genres: Genre[];
}

export default function Genres({genres}: GenreProps) {
    return (
        <div>
            {
                genres.map((genre, index) => {
                    return (
                        //Separa os generos por vírgula, e remove a do último
                        <span key={genre.id}>
                            {genre.name}
                            {index < genres.length - 1 ? ', ' : ''}
                        </span>
                    );
                })
            }
        </div>
    );
}