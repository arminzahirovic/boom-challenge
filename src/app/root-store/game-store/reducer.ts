import { createReducer, on } from "@ngrx/store"

import { Cell } from "src/app/domain/Cell.model";
import { CellType } from "src/app/domain/CellType.enum"
import { Result } from "src/app/domain/Result.enum";
import { 
    finishGame, startGame, selectCell, noopAction, addLoss, addWin, setWinsAndLosses, setSurrounding, setBoard 
} from "./actions"

import { initialGameState } from "./state"

export const gameFeatureKey = 'game';

const cellType = CellType;

export const gameFeatureReducer = createReducer(
    initialGameState,

    on(startGame, (state, action) => {
        return {
            ...initialGameState,
            inProgress: true,
            wins: state.wins,
            losses: state.losses
        }
    }),

    on(finishGame, (state, action) => {
        return {
            ...state,
            inProgress: false,
            isFinished: true
        }
    }),

    on(selectCell, (state, action) => {
        const board = state.board.map((row, rowIndex) => {
            return row.map((cell, cellIndex) => {
                if (rowIndex === action.position.x && cellIndex === action.position.y) {
                    return {
                        type: cell.type,
                        hidden: false
                    } as Cell;
                } else {
                    return cell;
                }
            })
        });

        switch(cellType[action.valueType]) {
            case CellType.Bomb:
                return {
                    ...state,
                    consecutiveBombs: state.consecutiveBombs + 1,
                    consecutiveSmileys: 0,
                    numberOfPlays: state.numberOfPlays + 1,
                    board,
                    bombsAround: 0,
                    smileysAround: 0
                }
            case CellType.Smiley:
                return {
                    ...state,
                    consecutiveBombs: 0,
                    consecutiveSmileys: state.consecutiveSmileys + 1,
                    numberOfPlays: state.numberOfPlays + 1,
                    board,
                    bombsAround: 0,
                    smileysAround: 0
                }
            case CellType.Reset:
                return {
                    ...state,
                    consecutiveBombs: 0,
                    consecutiveSmileys: 0,
                    numberOfPlays: state.numberOfPlays + 1,
                    board
                }
        }
    }),

    on(noopAction, (state, action) => {
        return {
            ...state
        }
    }),

    on(addLoss, (state, action) => {
        return {
            ...state,
            consecutiveBombs: 0,
            losses: state.losses + 1,
            result: Result.lost
        }
    }),

    on(addWin, (state, action) => {
        return {
            ...state,
            consecutiveSmileys: 0,
            wins: state.wins + 1,
            result: Result.won
        }
    }),

    on(setWinsAndLosses, (state, action) => {
        return {
            ...state,
            wins: action.wins,
            losses: action.losses
        }
    }),

    on(setSurrounding, (state, action) => {
        return {
            ...state,
            bombsAround: action.bombs,
            smileysAround: action.smileys
        }
    }),
    
    on(setBoard, (state, action) => {
        return {
            ...state,
            board: action.board
        }
    }),
)
