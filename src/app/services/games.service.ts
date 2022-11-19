import { Injectable } from "@angular/core";
import { Cell } from "../domain/Cell.model";
import { CellType } from "../domain/CellType.enum";

import { Position } from "../domain/Position.model";
import { Surrounding } from "../domain/Surrounding.model";

const surroundingPositions: Position[] = [
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: +1 },
    { x: 0, y: -1 },
    { x: 0, y: +1 },
    { x: +1, y: -1 },
    { x: +1, y: 0 },
    { x: +1, y: +1 }
]

@Injectable()
export class GameService {

    findSurroundingElauements(board: Cell[][], selectedElement: Position): Surrounding {
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
}