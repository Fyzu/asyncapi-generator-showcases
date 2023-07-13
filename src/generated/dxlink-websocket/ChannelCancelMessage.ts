import {AnonymousSchema_1} from './AnonymousSchema_1';
interface ChannelCancelMessage {
  reservedType: AnonymousSchema_1;
  /**
   * Identifies within which channel the communication is occurring.
   */
  channel: number;
  additionalProperties?: Map<string, any>;
}
export { ChannelCancelMessage };