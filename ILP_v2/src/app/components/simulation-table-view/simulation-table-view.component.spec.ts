import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationTableViewComponent } from './simulation-table-view.component';

describe('SimulationTableViewComponent', () => {
  let component: SimulationTableViewComponent;
  let fixture: ComponentFixture<SimulationTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
