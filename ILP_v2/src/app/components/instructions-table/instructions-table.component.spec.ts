import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsTableComponent } from './instructions-table.component';

describe('InstructionsTableComponent', () => {
  let component: InstructionsTableComponent;
  let fixture: ComponentFixture<InstructionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
