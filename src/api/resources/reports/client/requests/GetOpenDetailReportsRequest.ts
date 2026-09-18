//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         campaignId: "campaign_id",
 *         subscriberHash: "subscriber_hash"
 *     }
 */
export interface GetOpenDetailReportsRequest {
    /** The unique id for the campaign. */
    campaignId: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    subscriberHash: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
    /** When true, exclude automated (proxy/bot) opens so the returned open counts reflect human opens only, matching the in-app Recipient Activity view. A member whose opens are all automated is excluded from the human-only view. Defaults to false (all opens). */
    filterBots?: boolean;
}
