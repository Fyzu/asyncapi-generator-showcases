import {FeedContract} from './FeedContract';
import {AnonymousSchema_43} from './AnonymousSchema_43';
/**
 * Parameters of operated channel.
 */
interface FeedServiceParameters {
  /**
   * Subscription contract of the `FEED` service. Possible values:
   * - `HISTORY` - real-time history of events with snapshots (like Candles)
   * - `TICKER` - real-time ticker of events (like Quotes)
   * - `STREAM` - real-time stream of events (like Orders)
   * - `AUTO` - automatic selection of contract type depending on event type:
   *   - `HISTORY` - for `Candle` event type and others
   *   - `TICKER` - for `Quote` event type and others
   *   - `STREAM` - for `Order` event type and others
   */
  contract: FeedContract;
  subFormat?: AnonymousSchema_43;
  additionalProperties?: Map<string, any>;
}
export { FeedServiceParameters };