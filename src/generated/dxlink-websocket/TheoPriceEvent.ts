import {AnonymousSchema_182} from './AnonymousSchema_182';
interface TheoPriceEvent {
  eventType?: AnonymousSchema_182;
  eventFlags?: number;
  index?: number;
  time?: number;
  sequence?: number;
  price?: number;
  underlyingPrice?: number;
  delta?: number;
  gamma?: number;
  dividend?: number;
  interest?: number;
  eventSymbol?: string;
  eventTime?: number;
  additionalProperties?: Map<string, any>;
}
export { TheoPriceEvent };