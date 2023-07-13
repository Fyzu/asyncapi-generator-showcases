import {AnonymousSchema_257} from './AnonymousSchema_257';
interface SpreadOrderEvent {
  eventType?: AnonymousSchema_257;
  spreadSymbol?: string;
  eventFlags?: number;
  index?: number;
  time?: number;
  timeNanoPart?: number;
  sequence?: number;
  source?: string;
  action?: string;
  actionTime?: number;
  orderId?: number;
  auxOrderId?: number;
  price?: number;
  size?: number;
  executedSize?: number;
  count?: number;
  exchangeCode?: string;
  orderSide?: string;
  scope?: string;
  tradeId?: number;
  tradePrice?: number;
  tradeSize?: number;
  eventSymbol?: string;
  eventTime?: number;
  additionalProperties?: Map<string, any>;
}
export { SpreadOrderEvent };