import { Module } from '@nestjs/common';
import { CashregisterController } from './cashregister.controller';
import { CashregisterService } from './cashregister.service';

@Module({
  controllers: [CashregisterController],
  providers: [CashregisterService]
})
export class CashregisterModule {}
