import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadExamplesComponent } from './load-examples.component';

describe('LoadExamplesComponent', () => {
  let component: LoadExamplesComponent;
  let fixture: ComponentFixture<LoadExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
