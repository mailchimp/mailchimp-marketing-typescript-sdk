//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         query: "query"
 *     }
 */
export interface ListSearchCampaignsRequest {
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
    /** The search query used to filter results. */
    query: string;
}
