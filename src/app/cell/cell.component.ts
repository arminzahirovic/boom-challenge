import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../domain/Cell.model';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() cell: Cell | undefined;
  @Input() positionX: number | undefined;
  @Input() positionY: number | undefined;

  showValue = false;

  constructor() { }

  ngOnInit(): void {
  }

  cellClicked(): void {
    if (this.showValue) {
      return;
    }

    this.showValue = true;
  }

}
