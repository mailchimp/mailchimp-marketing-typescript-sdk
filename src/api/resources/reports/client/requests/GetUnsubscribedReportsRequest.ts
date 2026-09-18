//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         campaignId: "campaign_id",
 *         subscriberHash: "subscriber_hash"
 *     }
 */
export interface GetUnsubscribedReportsRequest {
    /** The unique id for the campaign. */
    campaignId: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    subscriberHash: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}
