import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { expect } from '@jest/globals';

import { AppComponent } from './app.component';
import { GameModule } from './game-feature/game.module';
import { RootStoreModule } from './root-store';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        GameModule,
        RootStoreModule
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
        el = fixture.debugElement;
      });
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should display app-game component', () => {
    const gameComponent = el.queryAll(By.css(".game-component"));
    expect(gameComponent).toBeTruthy();
  });
});
