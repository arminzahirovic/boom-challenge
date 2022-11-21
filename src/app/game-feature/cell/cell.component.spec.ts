import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { expect, jest } from '@jest/globals';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { GameStoreActions } from 'src/app/root-store';
import { CellType } from '../domain/CellType.enum';

import { CellComponent } from './cell.component';

describe('CellComponent', () => {
  let component: CellComponent;
  let fixture: ComponentFixture<CellComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellComponent ],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellComponent);
    component = fixture.componentInstance;
    component.cell = { type: CellType.Bomb, hidden: true };
    component.positionX = 0;
    component.positionY = 0;
    component.gameFinished = false;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display cell with emoji hidden', () => {
    component.setEmoji = jest.fn();
    fixture.detectChanges();
    const cell = el.query(By.css(".cell"));
    const emoji = el.query(By.css(".emoji"));
    expect(cell).toBeTruthy();
    expect(emoji).toBeNull();
    expect(component.setEmoji).toBeCalled();
  });

  it('should display cell with emoji on game finished', () => {
    component.gameFinished = true;
    fixture.detectChanges();
    const cell = el.query(By.css(".cell"));
    const emoji = el.query(By.css(".emoji"));
    expect(cell).toBeTruthy();
    expect(emoji).toBeTruthy();
  });

  it('should display cell with emoji', () => {
    component.cell = { type: CellType.Bomb, hidden: false };
    fixture.detectChanges();
    const cell = el.query(By.css(".cell"));
    const emoji = el.query(By.css(".emoji"));
    expect(cell).toBeTruthy();
    expect(emoji).toBeTruthy();
  });

  it('should set emoji to boom', () => {
    fixture.detectChanges();
    component.setEmoji(CellType.Bomb);
    expect(component.emoji).toEqual('💥');
  });

  it('should set emoji to smiley', () => {
    fixture.detectChanges();
    component.setEmoji(CellType.Smiley);
    expect(component.emoji).toEqual('😀');
  });

  it('should set emoji to reset', () => {
    fixture.detectChanges();
    component.setEmoji(CellType.Reset);
    expect(component.emoji).toEqual('🌀');
  });

  it('should dispatch selectCell action', () => {
    const store = TestBed.inject(MockStore);
    store.dispatch = jest.fn();
    fixture.detectChanges();
    component.cellClicked();
    expect(store.dispatch).toBeCalledWith(
      GameStoreActions.selectCell(
        { 
          x: component.positionX,
          y: component.positionY
        }
      ));
  });

  it('shouldnt dispatch selectCell', () => {
    component.gameFinished = true;
    const store = TestBed.inject(MockStore);
    store.dispatch = jest.fn();
    fixture.detectChanges();
    component.cellClicked();
    expect(store.dispatch).toBeCalledTimes(0);
  });
});
