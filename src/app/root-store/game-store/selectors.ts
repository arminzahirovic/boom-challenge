import { createFeatureSelector, createSelector } from "@ngrx/store";

import { gameFeatureKey } from "./reducer";
import { GameState } from "./state";

export const selectGameState = createFeatureSelector<GameState>(gameFeatureKey);

export const isInProgress = createSelector(
    selectGameState,
    state => state.inProgress
)

export const cells = createSelector(
    selectGameState,
    state => state.board
)

export const wins = createSelector(
    selectGameState,
    state => state.wins
)

export const losses = createSelector(
    selectGameState,
    state => state.losses
)

export const numberOfPlays = createSelector(
    selectGameState,
    state => state.numberOfPlays
)

export const consecutiveBombs = createSelector(
    selectGameState,
    state => state.consecutiveBombs
)

export const consecutiveSmileys = createSelector(
    selectGameState,
    state => state.consecutiveSmileys
)

export const bombsAround = createSelector(
    selectGameState,
    state => state.bombsAround
)

export const smileysAround = createSelector(
    selectGameState,
    state => state.smileysAround
)

export const isFinished = createSelector(
    selectGameState,
    state => state.isFinished
)

export const result = createSelector(
    selectGameState,
    state => state.result
)
