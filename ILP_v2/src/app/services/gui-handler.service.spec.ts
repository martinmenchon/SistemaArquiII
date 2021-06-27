import { TestBed } from '@angular/core/testing';

import { GuiHandlerService } from './gui-handler.service';

describe('GuiHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuiHandlerService = TestBed.get(GuiHandlerService);
    expect(service).toBeTruthy();
  });
});
