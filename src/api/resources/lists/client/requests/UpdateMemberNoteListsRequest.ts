//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         list_id: "list_id",
 *         subscriber_hash: "subscriber_hash",
 *         note_id: "note_id"
 *     }
 */
export interface UpdateMemberNoteListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id. */
    subscriber_hash: string;
    /** The id for the note. */
    note_id: string;
    /** The content of the note. Note length is limited to 1,000 characters. */
    note?: string;
}
