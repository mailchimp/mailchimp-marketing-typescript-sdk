//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         campaign_id: "campaign_id",
 *         link_id: "link_id",
 *         subscriber_hash: "subscriber_hash"
 *     }
 */
export interface GetClickDetailMemberReportsRequest {
    /** The unique id for the campaign. */
    campaign_id: string;
    /** The id for the link. */
    link_id: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    subscriber_hash: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
}
