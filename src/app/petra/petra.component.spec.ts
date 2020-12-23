import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetraComponent } from './petra.component';

describe('PetraComponent', () => {
  let component: PetraComponent;
  let fixture: ComponentFixture<PetraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
