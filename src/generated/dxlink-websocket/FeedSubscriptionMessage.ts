import {AnonymousSchema_1} from './AnonymousSchema_1';
import {FeedRegularSubscription} from './FeedRegularSubscription';
import {FeedOrderBookSubscription} from './FeedOrderBookSubscription';
import {FeedTimeSeriesSubscription} from './FeedTimeSeriesSubscription';
interface FeedSubscriptionMessage {
  reservedType: AnonymousSchema_1;
  /**
   * Identifies within which channel the communication is occurring.
   */
  channel: number;
  /**
   * Operation to add subscription objects.
   */
  add?: (FeedRegularSubscription | FeedOrderBookSubscription | FeedTimeSeriesSubscription | any)[];
  /**
   * Operation to remove subscription objects.
   */
  remove?: (FeedRegularSubscription | FeedOrderBookSubscription | FeedTimeSeriesSubscription | any)[];
  /**
   * Remove all subscription objects when it's `true`.
   */
  reservedReset?: boolean;
  additionalProperties?: Map<string, any>;
}
export { FeedSubscriptionMessage };