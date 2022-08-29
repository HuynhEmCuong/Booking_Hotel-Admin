/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuestActionComponent } from './guest-action.component';

describe('GuestActionComponent', () => {
  let component: GuestActionComponent;
  let fixture: ComponentFixture<GuestActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
