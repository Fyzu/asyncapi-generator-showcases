import {Depth} from './Depth';
import {Interval} from './Interval';
import {ReservedName} from './ReservedName';
interface AnonymousSchema_14 {
  /**
   * Depth associated with book subscription in number of levels each side.
   */
  depth?: Depth;
  /**
   * Time interval associated with ohlc subscription in minutes.
   */
  interval?: Interval;
  /**
   * Max rate-limit budget. Compare to the ratecounter field in the openOrders updates to check whether you are approaching the rate limit.
   */
  maxratecount?: number;
  /**
   * The name of the channel you subscribe too.
   */
  reservedName: ReservedName;
  /**
   * base64-encoded authentication token for private-data endpoints.
   */
  token?: string;
  additionalProperties?: Map<string, any>;
}
export { AnonymousSchema_14 };