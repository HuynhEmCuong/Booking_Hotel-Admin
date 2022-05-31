/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoomCateListComponent } from './room-cate-list.component';

describe('RoomCateListComponent', () => {
  let component: RoomCateListComponent;
  let fixture: ComponentFixture<RoomCateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
