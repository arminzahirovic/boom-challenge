import { createAction, props } from "@ngrx/store"
import { Cell } from "src/app/game-feature/domain/Cell.model"

import { SelectCell } from "src/app/game-feature/domain/SelectCell.model"
import { Surrounding } from "src/app/game-feature/domain/Surrounding.model"

enum ActionTypes {
    START_NEW_GAME = "[New Game] Set in progress to true",
    FINISH_GAME = "[Finish Game] Set in progress to false",
    GAME_WON = "[Game won] Add one win",
    GAME_LOST = "[Game lost] Add one loss",
    SELECT_CELL = "[Cell component] Cell selected",
    TURN_PLAYED = "[Turn played] Turn played",
    NOOP_ACTION = "[Turn played effect] Noop action",
    SET_WINS_AND_LOSSES = "[Game Component] Set wins and losses",
    SET_SURROUNDING = "[Select cell effect] Set number of bombms and smileys in surroundings",
    SET_BOARD = "[New game effect] Initialize board cells"
}

export const startGame = createAction(
    ActionTypes.START_NEW_GAME
)

export const finishGame = createAction(
   ActionTypes.FINISH_GAME,
   props<{ wins: number, losses: number }>()
)

export const addWin = createAction(
    ActionTypes.GAME_WON
)

export const addLoss = createAction(
    ActionTypes.GAME_LOST
)

export const setWinsAndLosses = createAction(
    ActionTypes.SET_WINS_AND_LOSSES,
    props<{ wins: number, losses: number }>()
)

export const selectCell = createAction(
    ActionTypes.SELECT_CELL,
    props<SelectCell>()
)

export const turnPlayed = createAction(
    ActionTypes.TURN_PLAYED
)

export const noopAction = createAction(
    ActionTypes.NOOP_ACTION
)

export const setSurrounding = createAction(
    ActionTypes.SET_SURROUNDING,
    props<Surrounding>()
)

export const setBoard = createAction(
    ActionTypes.SET_BOARD,
    props<{ board: Cell[][] }>()
)
