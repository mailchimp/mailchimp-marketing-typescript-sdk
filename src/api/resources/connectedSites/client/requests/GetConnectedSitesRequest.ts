//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         connected_site_id: "connected_site_id"
 *     }
 */
export interface GetConnectedSitesRequest {
    /** The unique identifier for the site. */
    connected_site_id: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
}
