import { getSeatsBySession } from "../../../api/sessionRoutes";
import LegendSeats from "../../../components/SessionPage/LegendSeats";
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
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="flex flex-col items-center justify-center p-10 rounded-xl bg-cyan-950 border-2">
                    <div className="grid grid-cols-5 gap-1">
                        {seats?.map(({ id, number, isOccupied }) => (
                            <Seat
                                key={id}
                                id={id}
                                isOccupied={isOccupied}
                                number={number}
                            />
                        ))}
                    </div>
                    <div className="bg-slate-100 rounded w-full mt-10 p-1">
                        <p className="text-sm text-center">TELA</p>
                    </div>

                    <div className="text-white mt-10">
                        <LegendSeats />
                    </div>
                </div>
            </div>
        </main>
    )
}