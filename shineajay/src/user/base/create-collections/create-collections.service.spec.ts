import { Test, TestingModule } from '@nestjs/testing';
import { CreateCollectionsService } from './create-collections.service';

describe('CreateCollectionsService', () => {
  let service: CreateCollectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateCollectionsService],
    }).compile();

    service = module.get<CreateCollectionsService>(CreateCollectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
