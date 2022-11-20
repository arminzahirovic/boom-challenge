import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { expect } from '@jest/globals';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { RootStoreModule } from 'src/app/root-store';
import { initialGameState } from 'src/app/root-store/game-store/state';
import { selectorsMock } from 'src/test-data/board';
import { GameModule } from '../game.module';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GameModule,
        RootStoreModule
      ],
      providers: [
        provideMockStore({
          initialState: initialGameState,
          selectors: selectorsMock
        })
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(BoardComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display app-cell component', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const cellComponents = el.queryAll(By.css(".cell-component"));
    expect(cellComponents.length).toBe(36);
  });
});
