export default interface Session {
    id: number,
    date: string,
    time: string,
    seats: Seat[],
}

export interface Seat {
    id: string,
    number: number,
    isOccupied: boolean,
}