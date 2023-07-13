import {AnonymousSchema_1} from './AnonymousSchema_1';
import {AnonymousSchema_42} from './AnonymousSchema_42';
import {FeedServiceParameters} from './FeedServiceParameters';
interface ChannelOpenedMessage {
  reservedType: AnonymousSchema_1;
  /**
   * Identifies within which channel the communication is occurring.
   */
  channel: number;
  service: AnonymousSchema_42;
  /**
   * Parameters of operated channel.
   */
  parameters: FeedServiceParameters;
  additionalProperties?: Map<string, any>;
}
export { ChannelOpenedMessage };