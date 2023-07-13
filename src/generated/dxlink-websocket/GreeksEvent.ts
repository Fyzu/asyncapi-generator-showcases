import {AnonymousSchema_168} from './AnonymousSchema_168';
interface GreeksEvent {
  eventType?: AnonymousSchema_168;
  eventFlags?: number;
  index?: number;
  time?: number;
  sequence?: number;
  price?: number;
  volatility?: number;
  delta?: number;
  gamma?: number;
  theta?: number;
  rho?: number;
  vega?: number;
  eventSymbol?: string;
  eventTime?: number;
  additionalProperties?: Map<string, any>;
}
export { GreeksEvent };