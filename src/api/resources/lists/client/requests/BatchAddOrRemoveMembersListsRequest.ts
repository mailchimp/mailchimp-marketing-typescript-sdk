//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         listId: "list_id",
 *         segmentId: "segment_id"
 *     }
 */
export interface BatchAddOrRemoveMembersListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The unique id for the segment. */
    segmentId: string;
    /** An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. A maximum of 500 members can be sent. */
    membersToAdd?: string[];
    /** An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. A maximum of 500 members can be sent. */
    membersToRemove?: string[];
}
