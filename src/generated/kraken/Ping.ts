import {AnonymousSchema_1} from './AnonymousSchema_1';
interface Ping {
  reservedEvent: AnonymousSchema_1;
  /**
   * client originated ID reflected in response message.
   */
  reqid?: number;
  additionalProperties?: Map<string, any>;
}
export { Ping };