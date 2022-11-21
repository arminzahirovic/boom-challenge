import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Result } from '../domain/Result.enum';
import { GameStoreSelectors, GameStoreState } from '../../root-store';

@Component({
  selector: 'app-game-information',
  templateUrl: './game-information.component.html',
  styleUrls: ['./game-information.component.scss']
})
export class GameInformationComponent implements OnInit {

  boomsAround$: Observable<number> | undefined;
  smileysAround$: Observable<number> | undefined;
  consecutiveSmileys$: Observable<number> | undefined;
  consecutiveBooms$: Observable<number> | undefined;
  result$: Observable<Result | undefined> | undefined;
  result: Result | undefined;

  resultEnum = Result;

  constructor(
    private store: Store<GameStoreState.GameState>
  ) { }

  ngOnInit(): void {
    this.boomsAround$ = this.store.pipe(select(GameStoreSelectors.boomsAround));
    this.smileysAround$ = this.store.pipe(select(GameStoreSelectors.smileysAround));
    this.consecutiveBooms$ = this.store.pipe(select(GameStoreSelectors.consecutiveBooms));
    this.consecutiveSmileys$ = this.store.pipe(select(GameStoreSelectors.consecutiveSmileys));
    this.result$ = this.store.pipe(select(GameStoreSelectors.result));

    this.result$.subscribe((value) => this.result = value);
  }
}
