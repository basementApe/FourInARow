import type { AppState } from "../types";

export class AppModel {
  private state: AppState = {
    page: "overview",
    selectedGameId: null,
    games: [
      {
        id: 1,
        moves: [1, 2, 1, 4, 6],
        startedAt: "2026-09-29T08:40:00",
        finishedAt: null,
        winner: null
      },
      {
        id: 2,
        moves: [1, 4, 6],
        startedAt: "2026-09-29T09:00:00",
        finishedAt: null,
        winner: null
      },
      {
        id: 3,
        moves: [0, 3, 1, 3, 2, 3, 6, 3],
        startedAt: "2026-09-29T09:20:00",
        finishedAt: "2026-09-29T09:30:00",
        winner: "yellow"
      }
    ]
  }

  getState() : AppState
  {
    return structuredClone(this.state)
  }

  
}
