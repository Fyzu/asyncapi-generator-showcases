import {AnonymousSchema_51} from './AnonymousSchema_51';
interface QuoteEvent {
  eventType?: AnonymousSchema_51;
  sequence?: number;
  timeNanoPart?: number;
  bidTime?: number;
  bidExchangeCode?: string;
  bidPrice?: number;
  bidSize?: number;
  askTime?: number;
  askExchangeCode?: string;
  askPrice?: number;
  askSize?: number;
  eventSymbol?: string;
  eventTime?: number;
  additionalProperties?: Map<string, any>;
}
export { QuoteEvent };