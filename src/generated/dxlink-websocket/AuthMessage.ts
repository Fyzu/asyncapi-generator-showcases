import {AnonymousSchema_1} from './AnonymousSchema_1';
import {AnonymousSchema_2} from './AnonymousSchema_2';
interface AuthMessage {
  reservedType: AnonymousSchema_1;
  channel: AnonymousSchema_2;
  /**
   * Authorization token.
   */
  token: string;
  additionalProperties?: Map<string, any>;
}
export { AuthMessage };