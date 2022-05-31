/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoomStatusActionComponent } from './room-status-action.component';

describe('RoomStatusActionComponent', () => {
  let component: RoomStatusActionComponent;
  let fixture: ComponentFixture<RoomStatusActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomStatusActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomStatusActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
