import {AnonymousSchema_99} from './AnonymousSchema_99';
interface TradeEthEvent {
  eventType?: AnonymousSchema_99;
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
export { TradeEthEvent };