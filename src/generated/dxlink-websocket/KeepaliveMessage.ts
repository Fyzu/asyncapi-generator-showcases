import {AnonymousSchema_1} from './AnonymousSchema_1';
import {AnonymousSchema_2} from './AnonymousSchema_2';
interface KeepaliveMessage {
  reservedType: AnonymousSchema_1;
  channel: AnonymousSchema_2;
  additionalProperties?: Map<string, any>;
}
export { KeepaliveMessage };