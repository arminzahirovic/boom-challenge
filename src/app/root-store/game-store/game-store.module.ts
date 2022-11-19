import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'

import { gameFeatureKey, gameFeatureReducer } from './reducer';
import { GameEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(gameFeatureKey, gameFeatureReducer),
    EffectsModule.forFeature([GameEffects])
  ]
})
export class GameStoreModule { }
