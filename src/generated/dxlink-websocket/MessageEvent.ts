
interface MessageEvent {
  eventType?: string;
  eventSymbol?: string;
  eventTime?: number;
  attachment?: Map<string, any>;
  additionalProperties?: Map<string, any>;
}
export { MessageEvent };