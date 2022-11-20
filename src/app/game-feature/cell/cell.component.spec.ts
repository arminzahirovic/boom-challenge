import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { CellComponent } from './cell.component';

xdescribe('CellComponent', () => {
  let component: CellComponent;
  let fixture: ComponentFixture<CellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
