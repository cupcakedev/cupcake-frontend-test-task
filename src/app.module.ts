import { Module } from '@nestjs/common';
import { MarketStateFirstService } from './market-state-first.service';
import { MarketStateSecondService } from './market-state-second.service';
import { MarketStateThirdService } from './market-state-third.service';
import { MarketStateFirstController } from './market-state-first.controller';
import { MarketStateSecondController } from './market-state-second.controller';
import { MarketStateThirdController } from './market-state-third.controller';

@Module({
  imports: [],
  controllers: [
    MarketStateFirstController,
    MarketStateSecondController,
    MarketStateThirdController,
  ],
  providers: [
    MarketStateFirstService,
    MarketStateSecondService,
    MarketStateThirdService,
  ],
})
export class AppModule {}
