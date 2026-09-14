//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         folder_id: "folder_id"
 *     }
 */
export interface GetCampaignFoldersRequest {
    /** The unique id for the campaign folder. */
    folder_id: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
}
