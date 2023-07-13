import {AnonymousSchema_84} from './AnonymousSchema_84';
interface TradeEvent {
  eventType?: AnonymousSchema_84;
  time?: number;
  timeNanoPart?: number;
  sequence?: number;
  exchangeCode?: string;
  price?: number;
  change?: number;
  size?: number;
  dayId?: number;
  dayVolume?: number;
  dayTurnover?: number;
  tickDirection?: string;
  extendedTradingHours?: boolean;
  eventSymbol?: string;
  eventTime?: number;
  additionalProperties?: Map<string, any>;
}
export { TradeEvent };