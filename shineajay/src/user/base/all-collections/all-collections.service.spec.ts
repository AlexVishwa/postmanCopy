import { Test, TestingModule } from '@nestjs/testing';
import { AllCollectionsService } from './all-collections.service';

describe('AllCollectionsService', () => {
  let service: AllCollectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllCollectionsService],
    }).compile();

    service = module.get<AllCollectionsService>(AllCollectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
