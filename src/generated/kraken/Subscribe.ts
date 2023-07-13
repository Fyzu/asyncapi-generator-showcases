import {AnonymousSchema_2} from './AnonymousSchema_2';
import {AnonymousSchema_4} from './AnonymousSchema_4';
interface Subscribe {
  reservedEvent: AnonymousSchema_2;
  /**
   * client originated ID reflected in response message.
   */
  reqid?: number;
  /**
   * Array of currency pairs.
   */
  pair?: (string | any)[];
  subscription?: AnonymousSchema_4;
  additionalProperties?: Map<string, any>;
}
export { Subscribe };