//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         name: "name"
 *     }
 */
export interface CreateSmsCampaignsRequest {
    /** The name of the campaign. */
    name: string;
    /** The numeric ID of the list to send the campaign to. */
    listId?: number;
    /** The ID of the folder to place this campaign in. */
    folderId?: string;
    /** The segment IDs to target for this campaign. */
    segments?: number[];
    /** The segment IDs to exclude from this campaign. */
    excludedSegments?: number[];
}
