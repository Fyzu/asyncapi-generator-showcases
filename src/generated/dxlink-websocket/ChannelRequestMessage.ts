import {AnonymousSchema_1} from './AnonymousSchema_1';
import {ChannelRequestService} from './ChannelRequestService';
import {FeedServiceParameters} from './FeedServiceParameters';
interface ChannelRequestMessage {
  reservedType: AnonymousSchema_1;
  /**
   * Identifies within which channel the communication is occurring.
   */
  channel: number;
  /**
   * Operated service. Possible values:
   * - `FEED` - the feed service offers the ability to receive real-time updates about the trading information such as quotes, last traded price, volumes, and others.
   */
  service: ChannelRequestService;
  /**
   * Parameters of the operated service.
   */
  parameters: FeedServiceParameters;
  additionalProperties?: Map<string, any>;
}
export { ChannelRequestMessage };