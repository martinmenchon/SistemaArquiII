import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstructionComponent } from './add-instruction.component';

describe('AddInstructionComponent', () => {
  let component: AddInstructionComponent;
  let fixture: ComponentFixture<AddInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
