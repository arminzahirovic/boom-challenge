import { Cell } from 'src/app/game-feature/domain/Cell.model';
import { Result } from 'src/app/game-feature/domain/Result.enum';

export interface GameState {
    wins: number;
    losses: number;
    inProgress: boolean;
    isFinished: boolean;
    boomsAround: number;
    smileysAround: number;
    consecutiveSmileys: number;
    consecutiveBooms: number;
    numberOfPlays: number;
    board: Cell[][];
    result: Result | undefined;
}

export const initialGameState: GameState = {
    wins: 0,
    losses: 0,
    inProgress: false,
    isFinished: false,
    boomsAround: 0,
    smileysAround: 0,
    consecutiveSmileys: 0,
    consecutiveBooms: 0,
    numberOfPlays: 0,
    board: [],
    result: undefined
}
