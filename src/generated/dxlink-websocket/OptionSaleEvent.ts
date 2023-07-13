import {AnonymousSchema_208} from './AnonymousSchema_208';
interface OptionSaleEvent {
  eventType?: AnonymousSchema_208;
  eventFlags?: number;
  index?: number;
  time?: number;
  timeNanoPart?: number;
  sequence?: number;
  exchangeCode?: string;
  price?: number;
  size?: number;
  bidPrice?: number;
  askPrice?: number;
  exchangeSaleConditions?: string;
  tradeThroughExempt?: string;
  aggressorSide?: string;
  spreadLeg?: boolean;
  extendedTradingHours?: boolean;
  validTick?: boolean;
  reservedType?: string;
  underlyingPrice?: number;
  volatility?: number;
  delta?: number;
  optionSymbol?: string;
  eventSymbol?: string;
  eventTime?: number;
  additionalProperties?: Map<string, any>;
}
export { OptionSaleEvent };