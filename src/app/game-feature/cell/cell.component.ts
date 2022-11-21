import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Cell } from '../domain/Cell.model';
import { CellType } from '../domain/CellType.enum';
import { Position } from '../domain/Position.model';
import { GameStoreActions, RootStoreState,  } from '../../root-store';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() cell: Cell | undefined;
  @Input() positionX!: number;
  @Input() positionY!: number;
  @Input() gameFinished: boolean = false;

  emoji = '';

  constructor(
    private store: Store<RootStoreState.RootState>
  ) { }

  ngOnInit(): void {
    if (this.cell) {
      this.setEmoji(this.cell.type);
    }
  }

  cellClicked(): void {
    if (!this.cell?.hidden || this.gameFinished) {
      return;
    }

    const position: Position = {
      x: this.positionX,
      y: this.positionY
    };

    this.store.dispatch(GameStoreActions.selectCell(position));
  }

  setEmoji(type: CellType): void {
    switch(type) {
      case CellType.Boom:
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
