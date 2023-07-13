import {AnonymousSchema_114} from './AnonymousSchema_114';
interface CandleEvent {
  eventType?: AnonymousSchema_114;
  eventSymbol?: string;
  eventTime?: number;
  eventFlags?: number;
  index?: number;
  time?: number;
  sequence?: number;
  count?: number;
  reservedOpen?: number;
  high?: number;
  low?: number;
  reservedClose?: number;
  volume?: number;
  vwap?: number;
  bidVolume?: number;
  askVolume?: number;
  impVolatility?: number;
  openInterest?: number;
  additionalProperties?: Map<string, any>;
}
export { CandleEvent };