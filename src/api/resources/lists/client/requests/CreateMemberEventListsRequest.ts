//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         listId: "list_id",
 *         subscriberHash: "subscriber_hash",
 *         name: "name"
 *     }
 */
export interface CreateMemberEventListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id. */
    subscriberHash: string;
    /** Events created with the is_syncing value set to `true` will not trigger automations. */
    isSyncing?: boolean;
    /** The name for this type of event ('purchased', 'visited', etc). Must be 2-30 characters in length */
    name: string;
    /** The date and time the event occurred in ISO 8601 format. */
    occurredAt?: Date;
    /** An optional list of properties */
    properties?: Record<string, string>;
}
