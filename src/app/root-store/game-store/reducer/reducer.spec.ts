
import { expect } from '@jest/globals';
import {
    boardMock,
    boardMockBoomSelected,
    boardMockResetSelected,
    boardMockSmileySelected
} from 'src/test-data/board';

import { GameStoreActions, GameStoreState } from '..';
import { initialGameState } from '../state';
import { gameFeatureReducer } from './reducer';
import { Position } from 'src/app/game-feature/domain/Position.model';
import { Result } from 'src/app/game-feature/domain/Result.enum';
import { Surrounding } from 'src/app/game-feature/domain/Surrounding.model';

describe('Game reducer', () => {
    it('should set inProgress to true', () => {
        const expectedState: GameStoreState.GameState = {
            ...initialGameState,
            inProgress: true
        };

        const action = GameStoreActions.startGame();
        
        const result = gameFeatureReducer(initialGameState, action);

        expect(result).toEqual(expectedState);
    });

    it('should set inProgress to false and isFinished to true', () => {
        const expectedState: GameStoreState.GameState = {
            ...initialGameState,
            inProgress: false,
            isFinished: true
        };

        const action = GameStoreActions.finishGame();
        
        const result = gameFeatureReducer(initialGameState, action);

        expect(result).toEqual(expectedState);
    });

    it('should return unchanged state', () => {
        const expectedState: GameStoreState.GameState = {
            ...initialGameState
        };

        const action = GameStoreActions.noopAction();
        
        const result = gameFeatureReducer(initialGameState, action);

        expect(result).toEqual(expectedState);
    });

    it('should set surrounding booms to 2 and smileys to 3', () => {
        const expectedState: GameStoreState.GameState = {
            ...initialGameState,
            boomsAround: 2,
            smileysAround: 3
        };
        const surrounding: Surrounding = {
            booms: 2,
            smileys: 3
        };

        const action = GameStoreActions.setSurrounding(surrounding);

        const  result = gameFeatureReducer(initialGameState, action);

        expect(result).toEqual(expectedState);
    });

    it('should increase losses by 1, set result as lost and set isFinished to true', () => {
        const expectedState = {
            ...initialGameState,
            losses: 1,
            result: Result.lost,
            isFinished: true
        };

        const action = GameStoreActions.addLoss();

        const result = gameFeatureReducer(initialGameState, action);

        expect(result).toEqual(expectedState);
    });

    it('should increase wins by 1, set result as won and set isFinished to true', () => {
        const expectedState = {
            ...initialGameState,
            wins: 1,
            result: Result.won,
            isFinished: true
        };

        const action = GameStoreActions.addWin();

        const result = gameFeatureReducer(initialGameState, action);

        expect(result).toEqual(expectedState);
    });

    it('should set selected smiley cell to be visible and increase consecutive clicks number', () => {
        const initialState = {
            ...initialGameState,
            board: boardMock
        }
        const expectedState = {
            ...initialGameState,
            consecutiveSmileys: 1,
            numberOfPlays: 1,
            board: boardMockSmileySelected
        };
        const position: Position = {
            x: 0,
            y: 3
        };

        const action = GameStoreActions.selectCell(position);

        const result = gameFeatureReducer(initialState, action);

        expect(result).toEqual(expectedState);
    });

    it('should set selected boom cell to be visible and increase consecutive clicks number', () => {
        const initialState = {
            ...initialGameState,
            board: boardMock
        }
        const expectedState = {
            ...initialGameState,
            consecutiveBooms: 1,
            numberOfPlays: 1,
            board: boardMockBoomSelected
        };
        const position: Position = {
            x: 0,
            y: 0
        };

        const action = GameStoreActions.selectCell(position);

        const result = gameFeatureReducer(initialState, action);

        expect(result).toEqual(expectedState);
    });

    it('should set selected reset cell to be visible and increase consecutive clicks number', () => {
        const initialState = {
            ...initialGameState,
            board: boardMock
        }
        const expectedState = {
            ...initialGameState,
            numberOfPlays: 1,
            board: boardMockResetSelected
        };
        const position: Position = {
            x: 1,
            y: 3
        };

        const action = GameStoreActions.selectCell(position);

        const result = gameFeatureReducer(initialState, action);

        expect(result).toEqual(expectedState);
    });

    it('should set board', () => {
        const expectedState = {
            ...initialGameState,
            board: boardMock
        };

        const action = GameStoreActions.setBoard({ board: boardMock });

        const result = gameFeatureReducer(initialGameState, action);

        expect(result).toEqual(expectedState);
    });
});
