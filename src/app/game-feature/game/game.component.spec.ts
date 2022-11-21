import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect, jest } from '@jest/globals';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { GameStoreActions, GameStoreSelectors, RootStoreModule } from 'src/app/root-store';
import { initialGameState } from 'src/app/root-store/game-store/state';
import { selectorsMock } from 'src/test-data/selectors';
import { GameModule } from '../game.module';
import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let el: DebugElement;
  let store: MockStore;

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
      fixture = TestBed.createComponent(GameComponent);
      store = TestBed.inject(MockStore);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    });
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Boom Challenge'`, () => {
    fixture.detectChanges();
    const component = fixture.componentInstance;
    expect(component.title).toEqual('Boom Challenge');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Boom Challenge');
  });

  it('should render game statistics', () => {
    store.overrideSelector(
      GameStoreSelectors.wins,
      2
    );
    store.overrideSelector(
      GameStoreSelectors.losses,
      10
    );
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('Wins: 2 Losses: 10');
  });

  it('should dispatch startGame action', () => {
    const store = TestBed.inject(MockStore);
    store.dispatch = jest.fn();
    fixture.detectChanges();
    component.startNewGame();
    expect(store.dispatch).toBeCalledWith(GameStoreActions.startGame());
  });
});
