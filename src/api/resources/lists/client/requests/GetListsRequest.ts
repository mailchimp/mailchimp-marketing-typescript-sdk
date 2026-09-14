//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         list_id: "list_id"
 *     }
 */
export interface GetListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
    /** Deprecated. Return the total_contacts field in the stats response, which contains an approximate count of subscribed, unsubscribed, and transactional contacts. For a complete audience contact count, use the /audiences endpoint instead. */
    include_total_contacts?: boolean;
}
