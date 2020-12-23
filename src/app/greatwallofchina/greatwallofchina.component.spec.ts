import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatwallofchinaComponent } from './greatwallofchina.component';

describe('GreatwallofchinaComponent', () => {
  let component: GreatwallofchinaComponent;
  let fixture: ComponentFixture<GreatwallofchinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreatwallofchinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatwallofchinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
