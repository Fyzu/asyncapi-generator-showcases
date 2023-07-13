import {AnonymousSchema_132} from './AnonymousSchema_132';
interface SummaryEvent {
  eventType?: AnonymousSchema_132;
  dayId?: number;
  dayOpenPrice?: number;
  dayHighPrice?: number;
  dayLowPrice?: number;
  dayClosePrice?: number;
  dayClosePriceType?: string;
  prevDayId?: number;
  prevDayClosePrice?: number;
  prevDayClosePriceType?: string;
  prevDayVolume?: number;
  openInterest?: number;
  eventSymbol?: string;
  eventTime?: number;
  additionalProperties?: Map<string, any>;
}
export { SummaryEvent };