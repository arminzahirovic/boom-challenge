import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs/operators';

import { CellType } from 'src/app/game-feature/domain/CellType.enum';
import { GameService } from 'src/app/game-feature/services/games.service';
import { GameStoreActions, GameStoreSelectors } from "..";

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
                this.store.select(GameStoreSelectors.consecutiveBooms),
                this.store.select(GameStoreSelectors.consecutiveSmileys), 
                this.store.select(GameStoreSelectors.cells)
            ),
            map(([action, consecutiveBooms, consecutiveSmileys, cells]) => {
                if (cells[action.x][action.y].type === CellType.Reset) {
                    const surrounding = this.gameService.findSurroundingElements(cells, action);
                    return GameStoreActions.setSurrounding(surrounding);
                }

                if (consecutiveBooms === 2) {
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
                this.store.select(GameStoreSelectors.numberOfPlays)
            ),
            map(([action, numberOfPlays]) => {
                if (numberOfPlays === 36) {
                    return GameStoreActions.finishGame();
                }

                return GameStoreActions.noopAction();
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
