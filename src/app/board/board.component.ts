import { Component, OnInit } from '@angular/core';
import { Cell } from '../domain/Cell.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  cells: Cell[][] = [];

  constructor() { }

  ngOnInit(): void {
    this.cells = [
      [
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell
      ],
      [
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell
      ],
      [
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell
      ],
      [
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell
      ],
      [
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell
      ],
      [
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell,
        {
          value: 'bomb'
        } as Cell
      ]
    ]
  }
}
