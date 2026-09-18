//  This file was auto-generated from our API Definition.

/**
 * The outreach associated with this order. For example, an email campaign or Facebook ad.
 */
export interface ECommerceOrderOutreach {
    /** A unique identifier for the outreach. Can be an email campaign ID. */
    id?: string;
    /** The name for the outreach. */
    name?: string;
    /** The date and time the Outreach was published in ISO 8601 format. */
    publishedTime?: Date;
    /** The type of the outreach. */
    type?: string;
}
