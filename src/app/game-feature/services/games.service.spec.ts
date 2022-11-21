import { TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { CellType } from '../domain/CellType.enum';
import { Position } from '../domain/Position.model';
import { GameService } from './games.service';
import { boardMock } from 'src/test-data/board';

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

    it('should find 2 booms and 1 smiley in surrounding of top left cell', () => {
        const selectedElement: Position = {
            x: 0,
            y: 0
        };

        const result = gamesService.findSurroundingElements(boardMock, selectedElement);

        expect(result.bombs).toBe(2);
        expect(result.smileys).toBe(1);
    });

    it('should find 5 booms and 1 smiley in surrounding of cell', () => {
        const selectedElement: Position = {
            x: 1,
            y: 1
        };

        const result = gamesService.findSurroundingElements(boardMock, selectedElement);

        expect(result.bombs).toBe(5);
        expect(result.smileys).toBe(1);
    });

    it('should find 0 booms and 2 smiley in surrounding of bottom right cell', () => {
        const selectedElement: Position = {
            x: 5,
            y: 5
        };

        const result = gamesService.findSurroundingElements(boardMock, selectedElement);

        expect(result.bombs).toBe(0);
        expect(result.smileys).toBe(2);
    });
})
