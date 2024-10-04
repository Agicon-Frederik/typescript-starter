import { Test, TestingModule } from '@nestjs/testing';
import { CashregisterController } from './cashregister.controller';

describe('CashregisterController', () => {
  let controller: CashregisterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CashregisterController],
    }).compile();

    controller = module.get<CashregisterController>(CashregisterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
