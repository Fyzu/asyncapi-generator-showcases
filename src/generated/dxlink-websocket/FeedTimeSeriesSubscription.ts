
/**
 * This type of subscription object is used in a channel with `HISTORY` or `AUTO` contract.
 */
interface FeedTimeSeriesSubscription {
  /**
   * Type of market data event.
   * @example Quote, Trade, Candle
   */
  reservedType: string;
  /**
   * Symbol of the subscription.
   * - `*` - wildcard (all symbols) subscription (for `STREAM` and `AUTO` contracts only)
   * - `symbol` - one symbol
   * @example AAPL, AMZN
   */
  reservedSymbol: string;
  /**
   * Timestamp (UNIX time) from when we want the data.
   * 
   * On `add`, new `fromTime` with the pair `type` and `symbol` will overwrite the previous subscription object.
   * On `remove`, the `fromTime` value is ignored but **mandatory**, pair `type`, and `symbol` will remove the previous subscription.
   */
  fromTime: number;
  additionalProperties?: Map<string, any>;
}
export { FeedTimeSeriesSubscription };