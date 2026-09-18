//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         folderId: "folder_id"
 *     }
 */
export interface GetCampaignFoldersRequest {
    /** The unique id for the campaign folder. */
    folderId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}
