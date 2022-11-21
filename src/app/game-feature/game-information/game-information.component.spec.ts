import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { expect } from '@jest/globals';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { GameStoreSelectors, RootStoreModule } from 'src/app/root-store';
import { initialGameState } from 'src/app/root-store/game-store/state';
import { selectorsMock } from 'src/test-data/selectors';
import { Result } from '../domain/Result.enum';
import { GameModule } from '../game.module';
import { GameInformationComponent } from './game-information.component';

describe('GameInformationComponent', () => {
  let component: GameInformationComponent;
  let fixture: ComponentFixture<GameInformationComponent>;
  let el: DebugElement;
  let nativeElement: HTMLElement;
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
      fixture = TestBed.createComponent(GameInformationComponent);
      store = TestBed.inject(MockStore);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display result', () => {
    store.overrideSelector(
      GameStoreSelectors.result,
      Result.won,
    );
    store.refreshState();
    fixture.detectChanges();
    const result = el.query(By.css(".result"));
    nativeElement = result.nativeElement;
    expect(nativeElement.textContent).toEqual(' You won the game ')
  });

  it('should display surrounding', () => {
    store.overrideSelector(
      GameStoreSelectors.boomsAround,
      2
    );
    store.overrideSelector(
      GameStoreSelectors.smileysAround,
      3
    );
    fixture.detectChanges();
    const surrounding = el.query(By.css(".surrounding-information"));
    nativeElement = surrounding.nativeElement;
    expect(nativeElement.textContent).toEqual(' There are 2 booms and 3 smileys around selected cell ')
  });

  it('should display game progress', () => {
    store.overrideSelector(
      GameStoreSelectors.consecutiveBooms,
      1
    );
    fixture.detectChanges();
    const progress = el.query(By.css(".game-progress div:first-child"));
    nativeElement = progress.nativeElement;
    expect(nativeElement.textContent).toEqual('Number of consecutive booms 1')
  });
});
