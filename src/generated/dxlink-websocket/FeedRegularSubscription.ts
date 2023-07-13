
/**
 * This type of subscription object is used in a channel with `TICKER`, `STREAM`, or `AUTO` contract.
 */
interface FeedRegularSubscription {
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
  additionalProperties?: Map<string, any>;
}
export { FeedRegularSubscription };