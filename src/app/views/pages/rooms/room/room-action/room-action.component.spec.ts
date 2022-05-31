/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoomActionComponent } from './room-action.component';

describe('RoomActionComponent', () => {
  let component: RoomActionComponent;
  let fixture: ComponentFixture<RoomActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
