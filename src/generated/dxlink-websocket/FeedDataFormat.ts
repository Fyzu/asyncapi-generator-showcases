
/**
 * Format of data in `FEED_DATA` message. Possible values:
 * - `FULL` - key-value objects (with field names)
 * - `COMPACT` - value only arrays (without field names)
 */
type FeedDataFormat = "FULL" | "COMPACT";
export { FeedDataFormat };