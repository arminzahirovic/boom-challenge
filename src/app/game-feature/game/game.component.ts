import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Result } from '../domain/Result.enum';
import { GameStoreActions, GameStoreSelectors, RootStoreState } from '../../root-store';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  wins$: Observable<number> | undefined;
  losses$: Observable<number> | undefined;
  isInProgress$: Observable<boolean> | undefined;
  isFinished$: Observable<boolean> | undefined;

  title = 'Boom Challenge';

  constructor(
    private store: Store<RootStoreState.RootState>
  ) { }

  ngOnInit(): void {
    this.wins$ = this.store.pipe(select(GameStoreSelectors.wins));
    this.losses$ = this.store.pipe(select(GameStoreSelectors.losses));
    this.isInProgress$ = this.store.pipe(select(GameStoreSelectors.isInProgress));
    this.isFinished$ = this.store.pipe(select(GameStoreSelectors.isFinished));
  }

  startNewGame(): void {
    this.store.dispatch(GameStoreActions.startGame());
  }
}
