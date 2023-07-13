import {AnonymousSchema_1} from './AnonymousSchema_1';
import {FeedDataFormat} from './FeedDataFormat';
interface FeedConfigMessage {
  reservedType: AnonymousSchema_1;
  /**
   * Identifies within which channel the communication is occurring.
   */
  channel: number;
  aggregationPeriod: number;
  /**
   * Format of data in `FEED_DATA` message. Possible values:
   * - `FULL` - key-value objects (with field names)
   * - `COMPACT` - value only arrays (without field names)
   */
  dataFormat: FeedDataFormat;
  eventFields?: Map<string, (string | any)[]>;
  additionalProperties?: Map<string, any>;
}
export { FeedConfigMessage };