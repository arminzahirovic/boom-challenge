import { expect } from '@jest/globals';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SubscriberSpy, subscribeSpyTo } from '@hirez_io/observer-spy';

import { GameService } from 'src/app/game-feature/services/games.service';
import { GameEffects } from './effects';
import { GameStoreActions, GameStoreSelectors } from '..';
import { boardMock } from 'src/test-data/board';
import { ActionTypes } from '../actions';
import { Surrounding } from 'src/app/game-feature/domain/Surrounding.model';
import { Position } from 'src/app/game-feature/domain/Position.model';
import { initialGameState } from '../state';
import { selectorsMock } from 'src/test-data/selectors';

describe('Game effects', () => {

    let actions$ = new Observable<Action>;
    let effects: GameEffects;
    let gameService: GameService;
    let obsSpy: SubscriberSpy<Action>;
    let store: MockStore;

    beforeEach(async () => {
      TestBed.configureTestingModule({
          providers: [
              GameEffects,
              provideMockActions(() => actions$),
              provideMockStore({
                initialState: initialGameState,
                selectors: selectorsMock
              }),
              GameService
          ]
      })
    });

    it('startGame$ dispatches setBoard action', () => {
        gameService = TestBed.inject(GameService);
        effects = TestBed.inject(GameEffects);
        store = TestBed.inject(MockStore);
        store.overrideSelector(
          GameStoreSelectors.isInProgress,
          true
        );

        actions$ = of(GameStoreActions.startGame());

        gameService.initializeBoard = (() => {
            return boardMock;
        });

        obsSpy = subscribeSpyTo(effects.startGame$);
        expect(obsSpy.getFirstValue()).toEqual({ board: boardMock, type: ActionTypes.SET_BOARD });
    });

    it('turnPlayed$ dispatches finishGame action if number of plays is 36', () => {
        effects = TestBed.inject(GameEffects);
        store = TestBed.inject(MockStore);
        store.overrideSelector(
          GameStoreSelectors.isInProgress,
          true
        );
        store.overrideSelector(
          GameStoreSelectors.numberOfPlays,
          36
        );

        actions$ = of(GameStoreActions.turnPlayed());

        obsSpy = subscribeSpyTo(effects.turnPlayed$);
        expect(obsSpy.getFirstValue()).toEqual({ type: ActionTypes.FINISH_GAME });
    });

    it('turnPlayed$ dispatches noopAction if number of plays is lower then 36', () => {
        effects = TestBed.inject(GameEffects);
        store = TestBed.inject(MockStore);
        store.overrideSelector(
          GameStoreSelectors.numberOfPlays,
          0
        );

        actions$ = of(GameStoreActions.turnPlayed());

        obsSpy = subscribeSpyTo(effects.turnPlayed$);
        expect(obsSpy.getFirstValue()).toEqual({ type: ActionTypes.NOOP_ACTION });
    });

    it('setSurrounding$ dispatches turnPlayed', () => {
        effects = TestBed.inject(GameEffects);
        store = TestBed.inject(MockStore);
        store.overrideSelector(
          GameStoreSelectors.numberOfPlays,
          0
        );

        actions$ = of(GameStoreActions.setSurrounding(new Surrounding()));

        obsSpy = subscribeSpyTo(effects.setSurrounding$);
        expect(obsSpy.getFirstValue()).toEqual({ type: ActionTypes.TURN_PLAYED });
    });

    it('cellClicked$ dispatches setSurrounding if clicked on reset cell', () => {
        const position: Position = {
            x: 1,
            y: 3
        };
        const surrounding: Surrounding = {
            booms: 2,
            smileys: 2
        }
        gameService = TestBed.inject(GameService);
        effects = TestBed.inject(GameEffects);
        store = TestBed.inject(MockStore);
        store.overrideSelector(
          GameStoreSelectors.consecutiveBooms,
          0
        );
        store.overrideSelector(
          GameStoreSelectors.consecutiveSmileys,
          0
        );
        store.overrideSelector(
          GameStoreSelectors.cells,
          boardMock
        );

        actions$ = of(GameStoreActions.selectCell(position));

        gameService.findSurroundingElements = (() => {
            return surrounding;
        });

        obsSpy = subscribeSpyTo(effects.cellClicked$);
        expect(obsSpy.getFirstValue()).toEqual({ booms: surrounding.booms, smileys: surrounding.smileys, type: ActionTypes.SET_SURROUNDING });
    });

    it('cellClicked$ dispatches addLoss if clicked on second consecutive boom', () => {
        const position: Position = {
            x: 0,
            y: 0
        };
        effects = TestBed.inject(GameEffects);
        store = TestBed.inject(MockStore);
        store.overrideSelector(
          GameStoreSelectors.consecutiveBooms,
          2
        );
        store.overrideSelector(
          GameStoreSelectors.consecutiveSmileys,
          0
        );
        store.overrideSelector(
          GameStoreSelectors.cells,
          boardMock
        );

        actions$ = of(GameStoreActions.selectCell(position));

        obsSpy = subscribeSpyTo(effects.cellClicked$);
        expect(obsSpy.getFirstValue()).toEqual({ type: ActionTypes.GAME_LOST });
    });

    it('cellClicked$ dispatches addLoss if clicked on third consecutive smiley', () => {
        const position: Position = {
            x: 0,
            y: 3
        };
        effects = TestBed.inject(GameEffects);
        store = TestBed.inject(MockStore);
        store.overrideSelector(
          GameStoreSelectors.consecutiveBooms,
          0
        );
        store.overrideSelector(
          GameStoreSelectors.consecutiveSmileys,
          3
        );
        store.overrideSelector(
          GameStoreSelectors.cells,
          boardMock
        );

        actions$ = of(GameStoreActions.selectCell(position));

        obsSpy = subscribeSpyTo(effects.cellClicked$);
        expect(obsSpy.getFirstValue()).toEqual({ type: ActionTypes.GAME_WON });
    });

    it('cellClicked$ dispatches turnPlayed', () => {
        const position: Position = {
            x: 0,
            y: 3
        };
        effects = TestBed.inject(GameEffects);
        store = TestBed.inject(MockStore);
        store.overrideSelector(
          GameStoreSelectors.consecutiveBooms,
          0
        );
        store.overrideSelector(
          GameStoreSelectors.consecutiveSmileys,
          1
        );
        store.overrideSelector(
          GameStoreSelectors.cells,
          boardMock
        );

        actions$ = of(GameStoreActions.selectCell(position));

        obsSpy = subscribeSpyTo(effects.cellClicked$);
        expect(obsSpy.getFirstValue()).toEqual({ type: ActionTypes.TURN_PLAYED });
    });

    afterEach(() => obsSpy?.unsubscribe());
});
