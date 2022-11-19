import { Cell } from "src/app/domain/Cell.model";
import { CellType } from "src/app/domain/CellType.enum";
import { Result } from "src/app/domain/Result.enum";

const initialCells = [
    [
      {
        type: CellType.Bomb,
        hidden: true
      } as Cell,
      {
        type: CellType.Smiley,
        hidden: true
      } as Cell,
      {
        type: CellType.Reset,
        hidden: true
      } as Cell,
      {
        type: CellType.Bomb,
        hidden: true
      } as Cell,
      {
        type: CellType.Smiley,
        hidden: true
      } as Cell,
      {
        type: CellType.Reset,
        hidden: true
      } as Cell
    ],
    [
      {
        type: CellType.Smiley,
        hidden: true
      } as Cell,
      {
        type: CellType.Reset,
        hidden: true
      } as Cell,
      {
        type: CellType.Bomb,
        hidden: true
      } as Cell,
      {
        type: CellType.Smiley,
        hidden: true
      } as Cell,
      {
        type: CellType.Reset,
        hidden: true
      } as Cell,
      {
        type: CellType.Bomb,
        hidden: true
      } as Cell
    ],
    [
      {
        type: CellType.Bomb,
        hidden: true
      } as Cell,
      {
        type: CellType.Smiley,
        hidden: true
      } as Cell,
      {
        type: CellType.Reset,
        hidden: true
      } as Cell,
      {
        type: CellType.Bomb,
        hidden: true
      } as Cell,
      {
        type: CellType.Smiley,
        hidden: true
      } as Cell,
      {
        type: CellType.Reset,
        hidden: true
      } as Cell
    ],
    [
        {
          type: CellType.Bomb,
          hidden: true
        } as Cell,
        {
          type: CellType.Smiley,
          hidden: true
        } as Cell,
        {
          type: CellType.Reset,
          hidden: true
        } as Cell,
        {
          type: CellType.Bomb,
          hidden: true
        } as Cell,
        {
          type: CellType.Smiley,
          hidden: true
        } as Cell,
        {
          type: CellType.Reset,
          hidden: true
        } as Cell
      ],
      [
        {
          type: CellType.Smiley,
          hidden: true
        } as Cell,
        {
          type: CellType.Reset,
          hidden: true
        } as Cell,
        {
          type: CellType.Bomb,
          hidden: true
        } as Cell,
        {
          type: CellType.Smiley,
          hidden: true
        } as Cell,
        {
          type: CellType.Reset,
          hidden: true
        } as Cell,
        {
          type: CellType.Bomb,
          hidden: true
        } as Cell
      ],
      [
        {
          type: CellType.Bomb,
          hidden: true
        } as Cell,
        {
          type: CellType.Smiley,
          hidden: true
        } as Cell,
        {
          type: CellType.Reset,
          hidden: true
        } as Cell,
        {
          type: CellType.Bomb,
          hidden: true
        } as Cell,
        {
          type: CellType.Smiley,
          hidden: true
        } as Cell,
        {
          type: CellType.Reset,
          hidden: true
        } as Cell
      ]
  ];

export interface GameState {
    wins: number;
    losses: number;
    inProgress: boolean;
    isFinished: boolean;
    bombsAround: number;
    smileysAround: number;
    consecutiveSmileys: number;
    conscutiveBombs: number;
    numberOfPlays: number;
    board: Cell[][];
    result: Result | undefined;
}

export const initialGameState: GameState = {
    wins: 0,
    losses: 0,
    inProgress: false,
    isFinished: false,
    bombsAround: 0,
    smileysAround: 0,
    consecutiveSmileys: 0,
    conscutiveBombs: 0,
    numberOfPlays: 0,
    board: [...initialCells],
    result: undefined
}