import { createAction, props } from "@ngrx/store"

import { SelectCell } from "src/app/domain/SelectCell.model"
import { Surrounding } from "src/app/domain/Surrounding.model"

enum ActionTypes {
    START_NEW_GAME = "[New Game] Set in progress to true",
    FINISH_GAME = "[Finish Game] Set in progress to false",
    GAME_WON = "[Game won] Add one win",
    GAME_LOST = "[Game lost] Add one loss",
    SELECT_CELL = "[Cell component] Cell selected",
    TURN_PLAYED = "[Select cell effect] Turn played",
    NOOP_ACTION = "[Turn played effect] Noop action",
    SET_WINS_AND_LOSSES = "[Game Component] Set wins and losses",
    SET_SURROUNDING = "[Select cell effect] Set number of bombms and smileys in surroundings"
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