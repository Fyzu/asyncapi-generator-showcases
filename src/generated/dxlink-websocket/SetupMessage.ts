import {AnonymousSchema_1} from './AnonymousSchema_1';
import {AnonymousSchema_2} from './AnonymousSchema_2';
interface SetupMessage {
  reservedType: AnonymousSchema_1;
  channel: AnonymousSchema_2;
  /**
   * Time to disconnect the sender if no messages are received (in seconds).
   */
  keepaliveTimeout?: number;
  /**
   * The desired time to disconnect the receiver if no messages are received (in seconds).
   */
  acceptKeepaliveTimeout?: number;
  /**
   * Protocol version.
   */
  version: string;
  additionalProperties?: Map<string, any>;
}
export { SetupMessage };