
/**
 * Error type. Possible values:
 * - UNSUPPORTED_PROTOCOL - does not support the protocol version
 * - TIMEOUT - did not receive the expected message within the allotted time period and considered that the connection was lost
 * - UNAUTHORIZED -  did not authorize
 * - INVALID_MESSAGE - when trying to process a received message(s), was unable to parse it correctly
 * - BAD_ACTION - the server has detected a protocol violation in the previously received message(s).
 * - UNKNOWN - an error occurred that does not fit into any of the previously described types.
 */
type ErrorType = "UNSUPPORTED_PROTOCOL" | "TIMEOUT" | "UNAUTHORIZED" | "INVALID_MESSAGE" | "BAD_ACTION" | "UNKNOWN";
export { ErrorType };