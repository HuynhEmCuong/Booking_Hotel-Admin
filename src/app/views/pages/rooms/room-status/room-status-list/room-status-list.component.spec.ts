/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoomStatusListComponent } from './room-status-list.component';

describe('RoomStatusListComponent', () => {
  let component: RoomStatusListComponent;
  let fixture: ComponentFixture<RoomStatusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomStatusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
