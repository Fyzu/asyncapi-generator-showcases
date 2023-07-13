import {AnonymousSchema_195} from './AnonymousSchema_195';
interface UnderlyingEvent {
  eventType?: AnonymousSchema_195;
  eventFlags?: number;
  index?: number;
  time?: number;
  sequence?: number;
  volatility?: number;
  frontVolatility?: number;
  backVolatility?: number;
  callVolume?: number;
  putVolume?: number;
  putCallRatio?: number;
  eventSymbol?: string;
  eventTime?: number;
  additionalProperties?: Map<string, any>;
}
export { UnderlyingEvent };