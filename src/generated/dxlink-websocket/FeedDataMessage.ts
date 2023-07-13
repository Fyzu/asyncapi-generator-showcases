import {AnonymousSchema_1} from './AnonymousSchema_1';
import {QuoteEvent} from './QuoteEvent';
import {ProfileEvent} from './ProfileEvent';
import {TradeEvent} from './TradeEvent';
import {TradeEthEvent} from './TradeEthEvent';
import {CandleEvent} from './CandleEvent';
import {SummaryEvent} from './SummaryEvent';
import {TimeAndSaleEvent} from './TimeAndSaleEvent';
import {GreeksEvent} from './GreeksEvent';
import {TheoPriceEvent} from './TheoPriceEvent';
import {UnderlyingEvent} from './UnderlyingEvent';
import {OptionSaleEvent} from './OptionSaleEvent';
import {SeriesEvent} from './SeriesEvent';
import {OrderEvent} from './OrderEvent';
import {SpreadOrderEvent} from './SpreadOrderEvent';
import {AnalyticOrderEvent} from './AnalyticOrderEvent';
import {ConfigurationEvent} from './ConfigurationEvent';
import {MessageEvent} from './MessageEvent';
interface FeedDataMessage {
  reservedType: AnonymousSchema_1;
  /**
   * Identifies within which channel the communication is occurring.
   */
  channel: number;
  /**
   * Batch of events.
   */
  events?: (QuoteEvent | ProfileEvent | TradeEvent | TradeEthEvent | CandleEvent | SummaryEvent | TimeAndSaleEvent | GreeksEvent | TheoPriceEvent | UnderlyingEvent | OptionSaleEvent | SeriesEvent | OrderEvent | SpreadOrderEvent | AnalyticOrderEvent | ConfigurationEvent | MessageEvent | any)[] | (string | (string | number | any)[] | any)[];
  additionalProperties?: Map<string, any>;
}
export { FeedDataMessage };