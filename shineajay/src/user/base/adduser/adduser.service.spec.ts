import { Test, TestingModule } from '@nestjs/testing';
import { AddUserService } from './adduser.service';

describe('AdduserService', () => {
  let service: AddUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddUserService],
    }).compile();

    service = module.get<AddUserService>(AddUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
