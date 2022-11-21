import { CellType } from './CellType.enum';
import { Position } from './Position.model';

export interface SelectCell {
    valueType: CellType;
    position: Position;
}
