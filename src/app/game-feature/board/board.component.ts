import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Cell } from '../domain/Cell.model';
import { GameStoreSelectors, RootStoreState } from '../../root-store';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  cells$: Observable<Cell[][]> | undefined;

  constructor(
    private store: Store<RootStoreState.RootState>
  ) { }

  ngOnInit(): void {
    this.cells$ = this.store.pipe(select(GameStoreSelectors.cells));
  }
}
