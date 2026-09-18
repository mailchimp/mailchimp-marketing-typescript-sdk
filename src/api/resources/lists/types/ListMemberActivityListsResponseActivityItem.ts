//  This file was auto-generated from our API Definition.

/**
 * Member activity events.
 */
export interface ListMemberActivityListsResponseActivityItem {
    /** The type of action recorded for the subscriber. */
    action?: string;
    /** The web-based ID for the campaign. */
    campaignId?: string;
    /** The ID of the parent campaign. */
    parentCampaign?: string;
    /** The date and time recorded for the action. */
    timestamp?: Date;
    /** If set, the campaign's title. */
    title?: string;
    /** The type of campaign that was sent. */
    type?: string;
    /** For clicks, the URL the subscriber clicked on. */
    url?: string;
}
