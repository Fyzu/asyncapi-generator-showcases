import {AnonymousSchema_1} from './AnonymousSchema_1';
import {FeedDataFormat} from './FeedDataFormat';
interface FeedSetupMessage {
  reservedType: AnonymousSchema_1;
  /**
   * Identifies within which channel the communication is occurring.
   */
  channel: number;
  /**
   * Desired aggregation period of events (in seconds).
   */
  acceptAggregationPeriod?: number;
  acceptEventFields?: Map<string, (string | any)[]>;
  /**
   * Format of data in `FEED_DATA` message. Possible values:
   * - `FULL` - key-value objects (with field names)
   * - `COMPACT` - value only arrays (without field names)
   */
  acceptDataFormat?: FeedDataFormat;
  additionalProperties?: Map<string, any>;
}
export { FeedSetupMessage };