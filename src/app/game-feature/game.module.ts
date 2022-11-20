import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GameStoreModule } from '../root-store';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';
import { GameInformationComponent } from './game-information/game-information.component';
import { GameComponent } from './game/game.component';
import { GameService } from './services/games.service';

@NgModule({
  declarations: [
    GameComponent,
    BoardComponent,
    CellComponent,
    GameInformationComponent
  ],
  imports: [
    BrowserModule,
    GameStoreModule
  ],
  exports: [GameComponent],
  providers: [GameService]
})
export class GameModule { }
