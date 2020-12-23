import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HanginggardensComponent } from './hanginggardens.component';

describe('HanginggardensComponent', () => {
  let component: HanginggardensComponent;
  let fixture: ComponentFixture<HanginggardensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanginggardensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HanginggardensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
