import { MarketStateRatesVm } from './market-state-rates.vm';

export class MarketStateVm {
  date: string;
  base: string;
  rates: MarketStateRatesVm;
  timestamp: number;
}
