import { Controller, Get } from '@nestjs/common';
import { MarketStateFirstService } from './market-state-first.service';
import {
  takeWhile,
} from 'rxjs/operators';
import { MarketStateSecondService } from './market-state-second.service';
import { MarketStateThirdService } from './market-state-third.service';

const takeFirst = takeWhile((v, i) => i < 1);

@Controller('')
export class AppController {
  constructor(
    private marketStateFirstService: MarketStateFirstService,
    private marketStateSecondService: MarketStateSecondService,
    private marketStateThirdService: MarketStateThirdService,
  ) {}
  @Get('first')
  getFirst(): any {
    return this.marketStateFirstService.getState();
  }
  @Get('first/poll')
  getFirstPoll() {
    return this.marketStateFirstService.getNextState();
  }
  @Get('second')
  getSecond(): any {
    return this.marketStateSecondService.getState();
  }
  @Get('second/poll')
  getSecondPoll() {
    return this.marketStateSecondService.getNextState();
  }
  @Get('third')
  getThird(): any {
    return this.marketStateThirdService.getState();
  }
  @Get('third/poll')
  getThirdPoll() {
    return this.marketStateThirdService.getNextState();
  }
}
