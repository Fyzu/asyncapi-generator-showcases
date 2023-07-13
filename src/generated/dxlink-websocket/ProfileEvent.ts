import {AnonymousSchema_64} from './AnonymousSchema_64';
interface ProfileEvent {
  eventType?: AnonymousSchema_64;
  description?: string;
  shortSaleRestriction?: string;
  tradingStatus?: string;
  statusReason?: string;
  haltStartTime?: number;
  haltEndTime?: number;
  highLimitPrice?: number;
  lowLimitPrice?: number;
  high52WeekPrice?: number;
  low52WeekPrice?: number;
  beta?: number;
  earningsPerShare?: number;
  dividendFrequency?: number;
  exDividendAmount?: number;
  exDividendDayId?: number;
  shares?: number;
  freeFloat?: number;
  eventSymbol?: string;
  eventTime?: number;
  additionalProperties?: Map<string, any>;
}
export { ProfileEvent };