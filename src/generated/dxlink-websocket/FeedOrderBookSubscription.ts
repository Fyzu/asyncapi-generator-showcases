
/**
 * This type of subscription object is used in a channel with `HISTORY` or `AUTO` contract.
 */
interface FeedOrderBookSubscription {
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
   * Source of the feed. Possible values [here](https://kb.dxfeed.com/en/data-model/qd-model-of-market-events.html#order-x).
   * @example NTV, ntv, DEFAULT
   */
  source: string;
  additionalProperties?: Map<string, any>;
}
export { FeedOrderBookSubscription };