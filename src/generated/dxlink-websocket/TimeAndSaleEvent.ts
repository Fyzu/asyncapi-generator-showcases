import {AnonymousSchema_146} from './AnonymousSchema_146';
interface TimeAndSaleEvent {
  eventType?: AnonymousSchema_146;
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
  buyer?: string;
  seller?: string;
  eventSymbol?: string;
  eventTime?: number;
  additionalProperties?: Map<string, any>;
}
export { TimeAndSaleEvent };