import { Test, TestingModule } from '@nestjs/testing';
import { CashregisterService } from './cashregister.service';

describe('CashregisterService', () => {
  let service: CashregisterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashregisterService],
    }).compile();

    service = module.get<CashregisterService>(CashregisterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
