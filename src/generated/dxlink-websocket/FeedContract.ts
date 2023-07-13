
/**
 * Subscription contract of the `FEED` service. Possible values:
 * - `HISTORY` - real-time history of events with snapshots (like Candles)
 * - `TICKER` - real-time ticker of events (like Quotes)
 * - `STREAM` - real-time stream of events (like Orders)
 * - `AUTO` - automatic selection of contract type depending on event type:
 *   - `HISTORY` - for `Candle` event type and others
 *   - `TICKER` - for `Quote` event type and others
 *   - `STREAM` - for `Order` event type and others
 */
type FeedContract = "HISTORY" | "TICKER" | "STREAM" | "AUTO";
export { FeedContract };