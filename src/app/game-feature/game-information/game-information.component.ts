import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Result } from '../domain/Result.enum';
import { GameStoreSelectors, RootStoreState } from '../../root-store';

@Component({
  selector: 'app-game-information',
  templateUrl: './game-information.component.html',
  styleUrls: ['./game-information.component.scss']
})
export class GameInformationComponent implements OnInit {

  bombsAround$: Observable<number> | undefined;
  smileysAround$: Observable<number> | undefined;
  consecutiveSmileys$: Observable<number> | undefined;
  consecutiveBombs$: Observable<number> | undefined;
  result$: Observable<Result | undefined> | undefined;
  result: Result | undefined;

  resultEnum = Result;

  constructor(
    private store: Store<RootStoreState.RootState>
  ) { }

  ngOnInit(): void {
    this.bombsAround$ = this.store.pipe(select(GameStoreSelectors.bombsAround));
    this.smileysAround$ = this.store.pipe(select(GameStoreSelectors.smileysAround));
    this.consecutiveBombs$ = this.store.pipe(select(GameStoreSelectors.consecutiveBombs));
    this.consecutiveSmileys$ = this.store.pipe(select(GameStoreSelectors.consecutiveSmileys));
    this.result$ = this.store.pipe(select(GameStoreSelectors.result));

    this.result$.subscribe((value) => this.result = value);
  }

}
