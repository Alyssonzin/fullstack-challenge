import Seat from "./Seat"

export default function LegendSeats() {
    return (
        <div>
            <h3 className="font-bold mb-3">Legenda:</h3>
            <div className="flex space-x-10">
                <div className="flex items-center">
                    <Seat active={false} isOccupied={true} />
                    <span className="text-sm"> - Ocupado</span>
                </div>
                <div className="flex items-center">
                    <Seat active={false} />
                    <span className="text-sm"> - Disponível</span>
                </div>
                <div className="flex items-center">
                    <Seat active={false} preSelected={true} />
                    <span className="text-sm"> - Selecionado</span>
                </div>
            </div>
        </div>
    )
}