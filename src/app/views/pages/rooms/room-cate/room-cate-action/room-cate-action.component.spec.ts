/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoomCateActionComponent } from './room-cate-action.component';

describe('RoomCateActionComponent', () => {
  let component: RoomCateActionComponent;
  let fixture: ComponentFixture<RoomCateActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCateActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCateActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
