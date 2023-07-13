import {AnonymousSchema_13} from './AnonymousSchema_13';
import {ReservedStatus} from './ReservedStatus';
import {AnonymousSchema_14} from './AnonymousSchema_14';
interface SubscriptionStatusSuccess {
  channelId: string;
  channelName: string;
  reservedEvent: AnonymousSchema_13;
  /**
   * client originated ID reflected in response message.
   */
  reqid?: number;
  /**
   * Array of currency pairs.
   */
  pair?: (string | any)[];
  reservedStatus?: ReservedStatus;
  subscription?: AnonymousSchema_14;
  additionalProperties?: Map<string, any>;
}
export { SubscriptionStatusSuccess };