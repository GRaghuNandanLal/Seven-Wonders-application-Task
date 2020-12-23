import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachupicchuComponent } from './machupicchu.component';

describe('MachupicchuComponent', () => {
  let component: MachupicchuComponent;
  let fixture: ComponentFixture<MachupicchuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachupicchuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachupicchuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
