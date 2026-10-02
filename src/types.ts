export type AppState = {
    page: "overview" | "currentGame",
    selectedGameId: null | number,
    games: GameSession[]
}

export type GameSession = {
    id: number,
    moves: number[],
    startedAt: string | null,
    finishedAt: string | null,
    winner: Winner | null | "neither"
}

export type Winner = "red" | "yellow"
