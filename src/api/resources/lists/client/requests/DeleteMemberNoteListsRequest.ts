//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         listId: "list_id",
 *         subscriberHash: "subscriber_hash",
 *         noteId: "note_id"
 *     }
 */
export interface DeleteMemberNoteListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id. */
    subscriberHash: string;
    /** The id for the note. */
    noteId: string;
}
