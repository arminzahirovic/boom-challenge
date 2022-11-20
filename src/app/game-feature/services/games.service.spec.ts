import { TestBed } from "@angular/core/testing";
import { expect } from '@jest/globals';

import { Cell } from "../domain/Cell.model";
import { CellType } from "../domain/CellType.enum";
import { Position } from "../domain/Position.model";
import { GameService } from "./games.service"

describe('GamesService', () => {
    let gamesService: GameService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [GameService]
        });

        gamesService = TestBed.inject(GameService);
    });

    it('should initialize board with 12 smileys, 12 resets, 12 bombs all set to hidden', () => {
        let numberOfSmileys = 0;
        let numberOfResets = 0;
        let numberOfBombs = 0;
        let hidden = true;
        const result = gamesService.initializeBoard();

        result.forEach((row) => {
            row.forEach((cell) => {
                if (!cell.hidden) {
                    hidden = cell.hidden;
                }
                switch(cell.type) {
                    case CellType.Bomb:
                        numberOfBombs++;
                        break;
                    case CellType.Reset:
                        numberOfResets++;
                        break;
                    case CellType.Smiley:
                        numberOfSmileys++;
                        break;
                }
            });
        });

        expect(numberOfSmileys).toBe(12);
        expect(numberOfResets).toBe(12);
        expect(numberOfBombs).toBe(12);
        expect(hidden).toBe(true);
    });

    it('should find 1 bomb and 1 smiley in surrounding of top left cell', () => {
        const selectedElement: Position = {
            x: 0,
            y: 0
        };
        const board = gamesService.initializeBoard();
        board[0][1] = { type: CellType.Bomb, hidden: true } as Cell;
        board[1][0] = { type: CellType.Smiley, hidden: true } as Cell;
        board[1][1] = { type: CellType.Reset, hidden: true } as Cell;

        const result = gamesService.findSurroundingElements(board, selectedElement);

        expect(result.bombs).toBe(1);
        expect(result.smileys).toBe(1);
    });

    it('should find 2 bomb and 3 smiley in surrounding of cell', () => {
        const selectedElement: Position = {
            x: 1,
            y: 1
        };
        const board = gamesService.initializeBoard();
        board[0][0] = { type: CellType.Bomb, hidden: true } as Cell;
        board[0][1] = { type: CellType.Smiley, hidden: true } as Cell;
        board[0][2] = { type: CellType.Reset, hidden: true } as Cell;
        board[1][0] = { type: CellType.Bomb, hidden: true } as Cell;
        board[1][2] = { type: CellType.Smiley, hidden: true } as Cell;
        board[2][0] = { type: CellType.Reset, hidden: true } as Cell;
        board[2][1] = { type: CellType.Smiley, hidden: true } as Cell;
        board[2][2] = { type: CellType.Reset, hidden: true } as Cell;

        const result = gamesService.findSurroundingElements(board, selectedElement);

        expect(result.bombs).toBe(2);
        expect(result.smileys).toBe(3);
    });

    it('should find 1 bomb and 1 smiley in surrounding of bottom right cell', () => {
        const selectedElement: Position = {
            x: 5,
            y: 5
        };
        const board = gamesService.initializeBoard();
        board[4][5] = { type: CellType.Bomb, hidden: true } as Cell;
        board[4][4] = { type: CellType.Smiley, hidden: true } as Cell;
        board[5][4] = { type: CellType.Reset, hidden: true } as Cell;

        const result = gamesService.findSurroundingElements(board, selectedElement);

        expect(result.bombs).toBe(1);
        expect(result.smileys).toBe(1);
    });
})
