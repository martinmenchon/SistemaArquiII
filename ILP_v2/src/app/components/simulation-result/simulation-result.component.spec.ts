import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationResultComponent } from './simulation-result.component';

describe('SimulationResultComponent', () => {
  let component: SimulationResultComponent;
  let fixture: ComponentFixture<SimulationResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
