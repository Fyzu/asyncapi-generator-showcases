import {AnonymousSchema_1} from './AnonymousSchema_1';
import {AnonymousSchema_2} from './AnonymousSchema_2';
import {AuthState} from './AuthState';
interface AuthStateMessage {
  reservedType: AnonymousSchema_1;
  channel: AnonymousSchema_2;
  /**
   * Authorization state. Possible values:
   * - `AUTHORIZED` - authorization is successful
   * - `UNAUTHORIZED` - authorization failed
   */
  state: AuthState;
  additionalProperties?: Map<string, any>;
}
export { AuthStateMessage };