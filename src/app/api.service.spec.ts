import { TestBed } from '@angular/core/testing';

import { PokemonService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', async () => {
    const service: PokemonService = TestBed.get(PokemonService);
    await expect(service).toBeTruthy();
  });
});
