import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigProcessorComponent } from './config-processor.component';

describe('ConfigProcessorComponent', () => {
  let component: ConfigProcessorComponent;
  let fixture: ComponentFixture<ConfigProcessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigProcessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
