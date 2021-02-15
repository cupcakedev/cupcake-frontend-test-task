import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketStateFirstService } from './market-state-first.service';
import { MarketStateSecondService } from './market-state-second.service';
import { MarketStateThirdService } from './market-state-third.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    MarketStateFirstService,
    MarketStateSecondService,
    MarketStateThirdService,
  ],
})
export class AppModule {}
