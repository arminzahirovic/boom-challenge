import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';
import { RootStoreModule } from './root-store/root-store.module';
import { GameService } from './services/games.service';
import { GameInformationComponent } from './game-information/game-information.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent,
    CellComponent,
    GameInformationComponent
  ],
  imports: [
    BrowserModule,
    RootStoreModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
