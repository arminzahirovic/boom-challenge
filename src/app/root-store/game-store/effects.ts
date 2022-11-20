import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, withLatestFrom } from "rxjs/operators";

import { CellType } from "src/app/game-feature/domain/CellType.enum";
import { GameService } from "src/app/game-feature/services/games.service";

import { GameStoreActions, GameStoreSelectors } from ".";

@Injectable()
export class GameEffects {

    startGame$ = createEffect(
        () => this.actions$.pipe(
            ofType(GameStoreActions.startGame),
            map(() => {
                const randomCells = this.gameService.initializeBoard();
                return GameStoreActions.setBoard({ board: randomCells });
            })
        )
    );

    cellClicked$ = createEffect(
        () => this.actions$.pipe(
            ofType(GameStoreActions.selectCell),
            withLatestFrom(
                this.store.select(GameStoreSelectors.consecutiveBombs),
                this.store.select(GameStoreSelectors.consecutiveSmileys), 
                this.store.select(GameStoreSelectors.cells)
            ),
            map(([action, consecutiveBombs, consecutiveSmileys, cells]) => {
                if (action.valueType === CellType.Reset) {
                    const surrounding = this.gameService.findSurroundingElauements(cells, action.position);
                    return GameStoreActions.setSurrounding(surrounding);
                }

                if (consecutiveBombs === 2) {
                    return GameStoreActions.addLoss();
                }

                if (consecutiveSmileys === 3) {
                    return GameStoreActions.addWin();
                }

                return GameStoreActions.turnPlayed();
            })
        )
    );

    turnPlayed$ = createEffect(
        () => this.actions$.pipe(
            ofType(GameStoreActions.turnPlayed),
            withLatestFrom(
                this.store.select(GameStoreSelectors.numberOfPlays),
                this.store.select(GameStoreSelectors.wins),
                this.store.select(GameStoreSelectors.losses)
            ),
            map(([action, numberOfPlays, wins, losses]) => {
                if (numberOfPlays === 36) {
                    return GameStoreActions.finishGame({ wins, losses });
                }

                return GameStoreActions.noopAction();
            })
        )
    );

    addLos$ = createEffect(
        () => this.actions$.pipe(
            ofType(GameStoreActions.addLoss),
            withLatestFrom(
                this.store.select(GameStoreSelectors.wins),
                this.store.select(GameStoreSelectors.losses)
            ),
            map(([action, wins, losses]) => {
                return GameStoreActions.finishGame({ wins, losses });
            })
        )
    );

    addWin$ = createEffect(
        () => this.actions$.pipe(
            ofType(GameStoreActions.addWin),
            withLatestFrom(
                this.store.select(GameStoreSelectors.wins),
                this.store.select(GameStoreSelectors.losses)
            ),
            map(([action, wins, losses]) => {
                return GameStoreActions.finishGame({ wins, losses });
            })
        )
    );

    setSurrounding$ = createEffect(
        () => this.actions$.pipe(
            ofType(GameStoreActions.setSurrounding),
            map(() => {
                return GameStoreActions.turnPlayed();
            })
        )
    );

    constructor(
        private actions$: Actions,
        private store: Store,
        private gameService: GameService
    ) { }
}
