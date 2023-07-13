import {AnonymousSchema_1} from './AnonymousSchema_1';
import {ErrorType} from './ErrorType';
interface ErrorMessage {
  reservedType: AnonymousSchema_1;
  /**
   * Identifies within which channel the communication is occurring.
   */
  channel: number;
  /**
   * Error type. Possible values:
   * - UNSUPPORTED_PROTOCOL - does not support the protocol version
   * - TIMEOUT - did not receive the expected message within the allotted time period and considered that the connection was lost
   * - UNAUTHORIZED -  did not authorize
   * - INVALID_MESSAGE - when trying to process a received message(s), was unable to parse it correctly
   * - BAD_ACTION - the server has detected a protocol violation in the previously received message(s).
   * - UNKNOWN - an error occurred that does not fit into any of the previously described types.
   */
  error: ErrorType;
  /**
   * Contains the description or reason for the  error.
   */
  message: string;
  additionalProperties?: Map<string, any>;
}
export { ErrorMessage };