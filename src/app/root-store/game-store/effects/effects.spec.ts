import { expect } from '@jest/globals';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { SubscriberSpy, subscribeSpyTo } from '@hirez_io/observer-spy'

import { GameService } from 'src/app/game-feature/services/games.service';
import { GameEffects } from './effects';
import { GameStoreActions, GameStoreSelectors } from '..';
import { boardMock } from 'src/test-data/board';
import { ActionTypes } from '../actions';
import { Surrounding } from 'src/app/game-feature/domain/Surrounding.model';
import { Position } from 'src/app/game-feature/domain/Position.model';

describe('Game effects', () => {

    let actions$ = new Observable<Action>;
    let effects: GameEffects;
    let gameService: GameService;
    let obsSpy: SubscriberSpy<Action>;

    it('startGame$ dispatches setBoard action', () => {
        TestBed.configureTestingModule({
            providers: [
                GameEffects,
                provideMockActions(() => actions$),
                provideMockStore({
                    selectors: [
                      {
                        selector: GameStoreSelectors.isInProgress,
                        value: true,
                      },
                      {
                        selector: GameStoreSelectors.numberOfPlays,
                        value: 36,
                      },
                    ],
                  }),
                GameService
            ]
        });
        gameService = TestBed.inject(GameService);
        effects = TestBed.inject(GameEffects);

        actions$ = of(GameStoreActions.startGame());

        gameService.initializeBoard = (() => {
            return boardMock;
        });

        obsSpy = subscribeSpyTo(effects.startGame$);
        expect(obsSpy.getFirstValue()).toEqual({ board: boardMock, type: ActionTypes.SET_BOARD });
    });

    it('turnPlayed$ dispatches finishGame action if number of plays is 36', () => {
        TestBed.configureTestingModule({
            providers: [
                GameEffects,
                provideMockActions(() => actions$),
                provideMockStore({
                    selectors: [
                      {
                        selector: GameStoreSelectors.isInProgress,
                        value: true,
                      },
                      {
                        selector: GameStoreSelectors.numberOfPlays,
                        value: 36,
                      },
                    ],
                  }),
                GameService
            ]
        });
        effects = TestBed.inject(GameEffects);

        actions$ = of(GameStoreActions.turnPlayed());

        obsSpy = subscribeSpyTo(effects.turnPlayed$);
        expect(obsSpy.getFirstValue()).toEqual({ type: ActionTypes.FINISH_GAME });
    });

    it('turnPlayed$ dispatches noopAction if number of plays is lower then 36', () => {
        TestBed.configureTestingModule({
            providers: [
                GameEffects,
                provideMockActions(() => actions$),
                provideMockStore({
                    selectors: [
                      {
                        selector: GameStoreSelectors.numberOfPlays,
                        value: 0,
                      },
                    ],
                  }),
                GameService
            ]
        });
        effects = TestBed.inject(GameEffects);
        actions$ = of(GameStoreActions.turnPlayed());

        obsSpy = subscribeSpyTo(effects.turnPlayed$);
        expect(obsSpy.getFirstValue()).toEqual({ type: ActionTypes.NOOP_ACTION });
    });

    it('setSurrounding$ dispatches turnPlayed', () => {
        TestBed.configureTestingModule({
            providers: [
                GameEffects,
                provideMockActions(() => actions$),
                provideMockStore({
                    selectors: [
                      {
                        selector: GameStoreSelectors.numberOfPlays,
                        value: 0,
                      },
                    ],
                  }),
                GameService
            ]
        });
        effects = TestBed.inject(GameEffects);
        actions$ = of(GameStoreActions.setSurrounding(new Surrounding()));

        obsSpy = subscribeSpyTo(effects.setSurrounding$);
        expect(obsSpy.getFirstValue()).toEqual({ type: ActionTypes.TURN_PLAYED });
    });

    it('cellClicked$ dispatches setSurrounding if clicked on reset cell', () => {
        TestBed.configureTestingModule({
            providers: [
                GameEffects,
                provideMockActions(() => actions$),
                provideMockStore({
                    selectors: [
                      {
                        selector: GameStoreSelectors.consecutiveBombs,
                        value: 0,
                      },
                      {
                        selector: GameStoreSelectors.consecutiveSmileys,
                        value: 0,
                      },
                      {
                        selector: GameStoreSelectors.cells,
                        value: boardMock,
                      }
                    ],
                  }),
                GameService
            ]
        });

        const position: Position = {
            x: 1,
            y: 3
        };
        const surrounding: Surrounding = {
            bombs: 2,
            smileys: 2
        }
        gameService = TestBed.inject(GameService);
        effects = TestBed.inject(GameEffects);
        actions$ = of(GameStoreActions.selectCell(position));

        gameService.findSurroundingElements = (() => {
            return surrounding;
        });

        obsSpy = subscribeSpyTo(effects.cellClicked$);
        expect(obsSpy.getFirstValue()).toEqual({ bombs: surrounding.bombs, smileys: surrounding.smileys, type: ActionTypes.SET_SURROUNDING });
    });

    it('cellClicked$ dispatches addLoss if clicked on second consecutive bomb', () => {
        TestBed.configureTestingModule({
            providers: [
                GameEffects,
                provideMockActions(() => actions$),
                provideMockStore({
                    selectors: [
                      {
                        selector: GameStoreSelectors.consecutiveBombs,
                        value: 2,
                      },
                      {
                        selector: GameStoreSelectors.consecutiveSmileys,
                        value: 0,
                      },
                      {
                        selector: GameStoreSelectors.cells,
                        value: boardMock,
                      }
                    ],
                  }),
                GameService
            ]
        });

        const position: Position = {
            x: 0,
            y: 0
        };
        effects = TestBed.inject(GameEffects);
        actions$ = of(GameStoreActions.selectCell(position));

        obsSpy = subscribeSpyTo(effects.cellClicked$);
        expect(obsSpy.getFirstValue()).toEqual({ type: ActionTypes.GAME_LOST });
    });

    it('cellClicked$ dispatches addLoss if clicked on third consecutive smiley', () => {
        TestBed.configureTestingModule({
            providers: [
                GameEffects,
                provideMockActions(() => actions$),
                provideMockStore({
                    selectors: [
                      {
                        selector: GameStoreSelectors.consecutiveBombs,
                        value: 0,
                      },
                      {
                        selector: GameStoreSelectors.consecutiveSmileys,
                        value: 3,
                      },
                      {
                        selector: GameStoreSelectors.cells,
                        value: boardMock,
                      }
                    ],
                  }),
                GameService
            ]
        });

        const position: Position = {
            x: 0,
            y: 3
        };
        effects = TestBed.inject(GameEffects);
        actions$ = of(GameStoreActions.selectCell(position));

        obsSpy = subscribeSpyTo(effects.cellClicked$);
        expect(obsSpy.getFirstValue()).toEqual({ type: ActionTypes.GAME_WON });
    });

    it('cellClicked$ dispatches turnPlayed', () => {
        TestBed.configureTestingModule({
            providers: [
                GameEffects,
                provideMockActions(() => actions$),
                provideMockStore({
                    selectors: [
                      {
                        selector: GameStoreSelectors.consecutiveBombs,
                        value: 0,
                      },
                      {
                        selector: GameStoreSelectors.consecutiveSmileys,
                        value: 1,
                      },
                      {
                        selector: GameStoreSelectors.cells,
                        value: boardMock,
                      }
                    ],
                  }),
                GameService
            ]
        });

        const position: Position = {
            x: 0,
            y: 3
        };
        effects = TestBed.inject(GameEffects);
        actions$ = of(GameStoreActions.selectCell(position));

        obsSpy = subscribeSpyTo(effects.cellClicked$);
        expect(obsSpy.getFirstValue()).toEqual({ type: ActionTypes.TURN_PLAYED });
    });

    afterEach(() => obsSpy?.unsubscribe());
});
