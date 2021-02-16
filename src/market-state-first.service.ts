import { Injectable } from '@nestjs/common';
import { MarketStateVm } from './market-state.vm';
import { Smush32, gaussian, exponential } from '@thi.ng/random';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { MarketStateRatesVm } from './market-state-rates.vm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dateFormat = require('dateformat');

@Injectable()
export class MarketStateFirstService {
  public getState() {
    return this.subject.getValue();
  }
  public getNextState() {
    return this.subject.asObservable().pipe(first((_, index) => index === 2));
  }
  private rnd = new Smush32(0xdecafbad);
  private subject = new BehaviorSubject(this.initialState());
  #source = interval(3000).subscribe({
    next: () => this.subject.next(this.nextState(this.subject.value)),
  });
  private nextState(lastState: MarketStateVm) {
    const marketState = new MarketStateVm();
    const marketNoise = gaussian(this.rnd, 0.5, 0)();
    const currencyNoiseGen = gaussian(this.rnd, 0.5, 0);
    marketState.rates = new MarketStateRatesVm();
    marketState.rates.RUB =
      lastState.rates.RUB + marketNoise + currencyNoiseGen();
    marketState.rates.USD =
      lastState.rates.USD + marketNoise + currencyNoiseGen();
    marketState.rates.EUR =
      lastState.rates.EUR + marketNoise + currencyNoiseGen();
    marketState.timestamp = Math.round(new Date().getTime() / 1000);
    marketState.base = 'CUPCAKE';
    marketState.date = dateFormat(new Date(), 'yyyy-mm-dd');
    return marketState;
  }
  private initialState(): MarketStateVm {
    const marketState = new MarketStateVm();
    marketState.rates = new MarketStateRatesVm();
    marketState.rates.EUR = gaussian(this.rnd, 1, 4)();
    marketState.rates.RUB = gaussian(this.rnd, 1, 4)();
    marketState.rates.USD = gaussian(this.rnd, 1, 2)();
    marketState.timestamp = Math.round(new Date().getTime() / 1000);
    marketState.base = 'CUPCAKE';
    marketState.date = dateFormat(new Date(), 'yyyy-mm-dd');
    return marketState;
  }
}
