import {Depth} from './Depth';
import {Interval} from './Interval';
import {ReservedName} from './ReservedName';
interface AnonymousSchema_4 {
  /**
   * Depth associated with book subscription in number of levels each side.
   */
  depth?: Depth;
  /**
   * Time interval associated with ohlc subscription in minutes.
   */
  interval?: Interval;
  /**
   * The name of the channel you subscribe too.
   */
  reservedName: ReservedName;
  /**
   * Whether to send rate-limit counter in updates (supported only for openOrders subscriptions)
   */
  ratecounter?: boolean;
  /**
   * Whether to send historical feed data snapshot upon subscription (supported only for ownTrades subscriptions)
   */
  snapshot?: boolean;
  /**
   * base64-encoded authentication token for private-data endpoints.
   */
  token?: string;
  additionalProperties?: Map<string, any>;
}
export { AnonymousSchema_4 };