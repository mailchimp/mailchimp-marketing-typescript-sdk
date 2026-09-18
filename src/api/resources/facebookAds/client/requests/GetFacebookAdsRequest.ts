//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         outreachId: "outreach_id"
 *     }
 */
export interface GetFacebookAdsRequest {
    /** The outreach id. */
    outreachId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}
