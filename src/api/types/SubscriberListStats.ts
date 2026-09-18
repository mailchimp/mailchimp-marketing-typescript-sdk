//  This file was auto-generated from our API Definition.

/**
 * Stats for the list. Many of these are cached for at least five minutes.
 */
export interface SubscriberListStats {
    /** The average number of subscriptions per month for the list (not returned if we haven't calculated it yet). */
    avgSubRate?: number;
    /** The average number of unsubscriptions per month for the list (not returned if we haven't calculated it yet). */
    avgUnsubRate?: number;
    /** The number of campaigns in any status that use this list. */
    campaignCount?: number;
    /** The date and time the last campaign was sent to this list in ISO 8601 format. This is updated when a campaign is sent to 10 or more recipients. */
    campaignLastSent?: Date;
    /** The number of members cleaned from the list. */
    cleanedCount?: number;
    /** The number of members cleaned from the list since the last campaign was sent. */
    cleanedCountSinceSend?: number;
    /** The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet). */
    clickRate?: number;
    /** The date and time of the last time someone subscribed to this list in ISO 8601 format. */
    lastSubDate?: Date;
    /** The date and time of the last time someone unsubscribed from this list in ISO 8601 format. */
    lastUnsubDate?: Date;
    /** The number of active members in the list. */
    memberCount?: number;
    /** The number of active members in the list since the last campaign was sent. */
    memberCountSinceSend?: number;
    /** The number of merge fields ([audience field](https://mailchimp.com/help/getting-started-with-merge-tags/)) for this list (doesn't include EMAIL). */
    mergeFieldCount?: number;
    /** The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet). */
    openRate?: number;
    /** The target number of subscriptions per month for the list to keep it growing (not returned if we haven't calculated it yet). */
    targetSubRate?: number;
    /** An approximate count of subscribed, unsubscribed, and transactional contacts in the list. Does not include cleaned, archived, pending, or contacts that need to be reconfirmed. Requires the (deprecated) include_total_contacts query parameter to be included; for a complete audience contact count, use the /audiences endpoint instead. */
    totalContacts?: number;
    /** The number of members who have unsubscribed from the list. */
    unsubscribeCount?: number;
    /** The number of members who have unsubscribed since the last campaign was sent. */
    unsubscribeCountSinceSend?: number;
}
