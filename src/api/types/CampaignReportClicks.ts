//  This file was auto-generated from our API Definition.

/**
 * An object describing the click activity for the campaign.
 */
export interface CampaignReportClicks {
    /** The number of unique clicks divided by the total number of successful deliveries. */
    clickRate?: number;
    /** The total number of clicks for the campaign. */
    clicksTotal?: number;
    /** The date and time of the last recorded click for the campaign in ISO 8601 format. */
    lastClick?: Date;
    /** The total number of unique clicks for links across a campaign. */
    uniqueClicks?: number;
    /** The total number of subscribers who clicked on a campaign. */
    uniqueSubscriberClicks?: number;
}
