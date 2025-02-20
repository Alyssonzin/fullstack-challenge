import { getSeatsBySession } from "../../../api/sessionRoutes";
import Seat from "../../../components/SessionPage/Seat";

interface Props {
    params: Promise<{ sessionId: string }>,
}

function fetchSeats(sessionId: string) {
    return getSeatsBySession(sessionId);
}

export default async function SessionPage({ params }: Props) {
    const { sessionId } = await params;
    const seats = await fetchSeats(sessionId);

    return (
        <main>
            <div className="flex items-center justify-center">
                {seats?.map(({ id, number, isOccupied }) => (
                    <Seat
                        key={id}
                        id={id}
                        isOccupied={isOccupied}
                        number={number}
                    />
                ))}
            </div>
        </main>
    )
}