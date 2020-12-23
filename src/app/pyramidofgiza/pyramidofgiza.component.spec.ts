import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidofgizaComponent } from './pyramidofgiza.component';

describe('PyramidofgizaComponent', () => {
  let component: PyramidofgizaComponent;
  let fixture: ComponentFixture<PyramidofgizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyramidofgizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyramidofgizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
