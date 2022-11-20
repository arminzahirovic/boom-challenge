import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Cell } from '../domain/Cell.model';
import { CellType } from '../domain/CellType.enum';
import { Position } from '../domain/Position.model';
import { GameStoreActions, GameStoreSelectors, RootStoreState } from '../../root-store';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() cell: Cell | undefined;
  @Input() positionX!: number;
  @Input() positionY!: number;

  isFinished$: Observable<boolean> | undefined;

  loaded = false;
  gameFinished = false;
  emoji = '';

  constructor(
    private store: Store<RootStoreState.RootState>
  ) { }

  ngOnInit(): void {
    if (this.cell) {
      this.loaded = true;
      this.setEmoji(this.cell.type);
    }

    this.isFinished$ = this.store.pipe(select(GameStoreSelectors.isFinished));
    this.isFinished$.subscribe((value) => this.gameFinished = value)
  }

  cellClicked(): void {
    if (!this.cell?.hidden || this.gameFinished) {
      return;
    }

    const position: Position = {
      x: this.positionX,
      y: this.positionY
    };

    this.store.dispatch(GameStoreActions.selectCell(
      { 
        valueType: this.cell.type,
        position
      }
    ));
  }

  setEmoji(type: CellType): void {
    switch(type) {
      case CellType.Bomb:
        this.emoji = '💥';
        break;
      case CellType.Smiley:
        this.emoji = '😀';
        break;
      case CellType.Reset:
        this.emoji = '🌀';
        break;
    }
  }
}
