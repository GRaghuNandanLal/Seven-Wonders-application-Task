import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LighthouseofalexandriaComponent } from './lighthouseofalexandria.component';

describe('LighthouseofalexandriaComponent', () => {
  let component: LighthouseofalexandriaComponent;
  let fixture: ComponentFixture<LighthouseofalexandriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LighthouseofalexandriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LighthouseofalexandriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
