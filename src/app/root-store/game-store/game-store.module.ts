import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'

import { gameFeatureKey, gameFeatureReducer } from './reducer';
import { GameEffects } from './effects';
import { localStorageMetaReducer } from './local-storage.metareducer';
import { sessionStorageMetaReducer } from './session-storage.metareducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(gameFeatureKey, gameFeatureReducer, {
      metaReducers: [sessionStorageMetaReducer, localStorageMetaReducer]
    }),
    EffectsModule.forFeature([GameEffects])
  ]
})
export class GameStoreModule { }
