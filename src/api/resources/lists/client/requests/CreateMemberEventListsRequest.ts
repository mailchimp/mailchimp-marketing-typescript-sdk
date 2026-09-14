//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         list_id: "list_id",
 *         subscriber_hash: "subscriber_hash",
 *         name: "name"
 *     }
 */
export interface CreateMemberEventListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id. */
    subscriber_hash: string;
    /** Events created with the is_syncing value set to `true` will not trigger automations. */
    is_syncing?: boolean;
    /** The name for this type of event ('purchased', 'visited', etc). Must be 2-30 characters in length */
    name: string;
    /** The date and time the event occurred in ISO 8601 format. */
    occurred_at?: string;
    /** An optional list of properties */
    properties?: Record<string, string>;
}
