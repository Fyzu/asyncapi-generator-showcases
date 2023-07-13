import {AnonymousSchema_233} from './AnonymousSchema_233';
interface OrderEvent {
  eventType?: AnonymousSchema_233;
  marketMaker?: string;
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
export { OrderEvent };