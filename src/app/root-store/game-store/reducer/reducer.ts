import { createReducer, on } from '@ngrx/store';

import { Cell } from 'src/app/game-feature/domain/Cell.model';
import { CellType } from 'src/app/game-feature/domain/CellType.enum';
import { Result } from 'src/app/game-feature/domain/Result.enum';
import {
    startGame,
    finishGame,
    selectCell,
    noopAction,
    addLoss,
    addWin,
    setSurrounding,
    setBoard
 } from '../actions';
import { initialGameState } from '../state';

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
        let selectedCellType;
        const board = state.board.map((row, rowIndex) => {
            return row.map((cell, cellIndex) => {
                if (rowIndex === action.x && cellIndex === action.y) {
                    selectedCellType = cell.type;
                    return {
                        type: cell.type,
                        hidden: false
                    } as Cell;
                } else {
                    return cell;
                }
            })
        });

        if (selectedCellType) {
            switch(selectedCellType) {
                case CellType.Boom:
                    return {
                        ...state,
                        consecutiveBooms: state.consecutiveBooms + 1,
                        consecutiveSmileys: 0,
                        numberOfPlays: state.numberOfPlays + 1,
                        board,
                        boomsAround: 0,
                        smileysAround: 0
                    }
                case CellType.Smiley:
                    return {
                        ...state,
                        consecutiveBooms: 0,
                        consecutiveSmileys: state.consecutiveSmileys + 1,
                        numberOfPlays: state.numberOfPlays + 1,
                        board,
                        boomsAround: 0,
                        smileysAround: 0
                    }
                case CellType.Reset:
                    return {
                        ...state,
                        consecutiveBooms: 0,
                        consecutiveSmileys: 0,
                        numberOfPlays: state.numberOfPlays + 1,
                        board
                    }
            }
        }

        return {...state};
    }),

    on(noopAction, (state, action) => {
        return {
            ...state
        }
    }),

    on(addLoss, (state, action) => {
        return {
            ...state,
            consecutiveBooms: 0,
            losses: state.losses + 1,
            result: Result.lost,
            inProgress: false,
            isFinished: true
        }
    }),

    on(addWin, (state, action) => {
        return {
            ...state,
            consecutiveSmileys: 0,
            wins: state.wins + 1,
            result: Result.won,
            inProgress: false,
            isFinished: true
        }
    }),

    on(setSurrounding, (state, action) => {
        return {
            ...state,
            boomsAround: action.booms,
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
