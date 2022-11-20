import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Cell } from '../domain/Cell.model';
import { GameStoreSelectors, GameStoreState } from '../../root-store';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  cells$: Observable<Cell[][]> | undefined;
  isFinished$: Observable<boolean> | undefined;

  gameFinished = false;

  constructor(
    private store: Store<GameStoreState.GameState>
  ) { }

  ngOnInit(): void {
    this.cells$ = this.store.pipe(select(GameStoreSelectors.cells));

    this.isFinished$ = this.store.pipe(select(GameStoreSelectors.isFinished));
    this.isFinished$.subscribe((value) => this.gameFinished = value);
  }
}
