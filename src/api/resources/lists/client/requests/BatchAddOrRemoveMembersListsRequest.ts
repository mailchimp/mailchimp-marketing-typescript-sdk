//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         list_id: "list_id",
 *         segment_id: "segment_id"
 *     }
 */
export interface BatchAddOrRemoveMembersListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** The unique id for the segment. */
    segment_id: string;
    /** An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. A maximum of 500 members can be sent. */
    members_to_add?: string[];
    /** An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. A maximum of 500 members can be sent. */
    members_to_remove?: string[];
}
