import { Injectable } from '@angular/core';

import { Cell } from '../domain/Cell.model';
import { CellType } from '../domain/CellType.enum';
import { Position } from '../domain/Position.model';
import { Surrounding } from '../domain/Surrounding.model';

const surroundingPositions: Position[] = [
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: +1 },
    { x: 0, y: -1 },
    { x: 0, y: +1 },
    { x: +1, y: -1 },
    { x: +1, y: 0 },
    { x: +1, y: +1 }
];

@Injectable()
export class GameService {

    findSurroundingElements(board: Cell[][], selectedElement: Position): Surrounding {
        const surrounding = new Surrounding();
        surroundingPositions.forEach((position) => {
            const x = selectedElement.x + position.x;
            const y = selectedElement.y + position.y;
            if (x > -1 && x < board.length && y > -1 && y < board[selectedElement.x].length) {
                if (board[x][y].type === CellType.Bomb) {
                    surrounding.bombs++;
                    return;
                }

                if (board[x][y].type === CellType.Smiley) {
                    surrounding.smileys++;
                    return;
                }
            }
        });
        return surrounding;
    }

    initializeBoard(): Cell[][] {
        const rows = 6;
        const columns = 6;
        const board: Cell[][] = [];
        let types = [
            CellType.Bomb,
            CellType.Smiley,
            CellType.Reset
        ];
        let numberOfBombs = 0;
        let numberOfSmileys = 0;
        let numberOfReset = 0;

        for (let i = 0; i < rows; i++) {

            const row = [];
            for (let j = 0; j < columns; j++) {
                const randomIndex = Math.floor(Math.random() * types.length);
                const cell: Cell = {
                    type: types[randomIndex],
                    hidden: true
                };
                row.push(cell);

                let removeType = false;
                switch(types[randomIndex]) {
                    case CellType.Bomb:
                        numberOfBombs++;
                        if (numberOfBombs === 12) {
                            removeType = true;
                        }
                        break;
                    case CellType.Smiley:
                        numberOfSmileys++;
                        if (numberOfSmileys === 12) {
                            removeType = true;
                        }
                        break;
                    case CellType.Reset:
                        numberOfReset++;
                        if (numberOfReset === 12) {
                            removeType = true;
                        }
                        break;
                }

                if (removeType) {
                    types = types.filter((type) => type !== types[randomIndex]);
                }
            }

            board.push(row);
        }

        return board;
    }
}
