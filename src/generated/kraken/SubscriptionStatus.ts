import {SubscriptionStatusError} from './SubscriptionStatusError';
import {SubscriptionStatusSuccess} from './SubscriptionStatusSuccess';
type SubscriptionStatus = SubscriptionStatusError | SubscriptionStatusSuccess;
export { SubscriptionStatus };