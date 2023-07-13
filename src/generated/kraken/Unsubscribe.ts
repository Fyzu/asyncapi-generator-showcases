import {AnonymousSchema_5} from './AnonymousSchema_5';
import {AnonymousSchema_6} from './AnonymousSchema_6';
interface Unsubscribe {
  reservedEvent: AnonymousSchema_5;
  /**
   * client originated ID reflected in response message.
   */
  reqid?: number;
  /**
   * Array of currency pairs.
   */
  pair?: (string | any)[];
  subscription?: AnonymousSchema_6;
  additionalProperties?: Map<string, any>;
}
export { Unsubscribe };