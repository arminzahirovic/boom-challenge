import { expect } from '@jest/globals';
import { Result } from 'src/app/game-feature/domain/Result.enum';

import { boardMock } from 'src/test-data/board';
import { GameStoreSelectors } from ".."
import { initialGameState } from "../state"

it('should select isInProgress', () => {
    const result = GameStoreSelectors.isInProgress.projector({ ...initialGameState});

    expect(result).toBe(false);
});

it('should select cells', () => {
    const result = GameStoreSelectors.cells.projector(
        { 
            ...initialGameState,
            board: boardMock
        }
    );

    expect(result).toEqual(boardMock);
});

it('should select wins', () => {
    const result = GameStoreSelectors.wins.projector({ ...initialGameState});

    expect(result).toBe(0);
});

it('should select losses', () => {
    const result = GameStoreSelectors.losses.projector({ ...initialGameState});

    expect(result).toBe(0);
});

it('should select numberOfPlays', () => {
    const result = GameStoreSelectors.numberOfPlays.projector({ ...initialGameState});

    expect(result).toBe(0);
});

it('should select consecutiveBombs', () => {
    const result = GameStoreSelectors.consecutiveBombs.projector({ ...initialGameState});

    expect(result).toBe(0);
});

it('should select consecutiveSmileys', () => {
    const result = GameStoreSelectors.consecutiveBombs.projector({ ...initialGameState});

    expect(result).toBe(0);
});

it('should select bombsAround', () => {
    const result = GameStoreSelectors.bombsAround.projector({ ...initialGameState});

    expect(result).toBe(0);
});

it('should select smileysAround', () => {
    const result = GameStoreSelectors.smileysAround.projector({ ...initialGameState});

    expect(result).toBe(0);
});

it('should select isFinished', () => {
    const result = GameStoreSelectors.isFinished.projector({ ...initialGameState});

    expect(result).toBe(false);
});

it('should select result', () => {
    const result = GameStoreSelectors.result.projector(
        { 
            ...initialGameState,
            result: Result.won
        }
    );

    expect(result).toBe(Result.won);
});
