import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, tap, withLatestFrom } from "rxjs/operators";

import { GameStoreActions, GameStoreSelectors } from ".";

@Injectable()
export class GameEffects {

    cellClicked$ = createEffect(
        () => this.actions$.pipe(
            ofType(GameStoreActions.selectCell),
            withLatestFrom(
                this.store.select(GameStoreSelectors.consecutiveBombs),
                this.store.select(GameStoreSelectors.consecutiveSmileys),
                this.store.select(GameStoreSelectors.numberOfPlays)
            ),
            map(([action, consecutiveBombs, consecutiveSmileys, numberOfPlays]) => {
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

    finishGame$ = createEffect(
        () => this.actions$.pipe(
            ofType(GameStoreActions.finishGame),
            tap((action) => {
                localStorage.setItem("losses", action.losses.toString());
                localStorage.setItem("wins", action.wins.toString());
            })
        ), {dispatch: false}
    );

    constructor(
        private actions$: Actions,
        private store: Store
    ) { }
}