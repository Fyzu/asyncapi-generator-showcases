import {AnonymousSchema_9} from './AnonymousSchema_9';
import {ReservedStatus} from './ReservedStatus';
interface SystemStatus {
  reservedEvent?: AnonymousSchema_9;
  /**
   * The ID of the connection
   */
  connectionId?: number;
  reservedStatus?: ReservedStatus;
  version?: string;
  additionalProperties?: Map<string, any>;
}
export { SystemStatus };