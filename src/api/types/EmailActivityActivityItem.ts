//  This file was auto-generated from our API Definition.

/**
 * A summary of the interaction with the campaign.
 */
export interface EmailActivityActivityItem {
    /** One of the following actions: 'open', 'click', or 'bounce' */
    action?: string;
    /** The IP address recorded for the action. */
    ip?: string;
    /** The date and time recorded for the action in ISO 8601 format. */
    timestamp?: Date;
    /** If the action is a 'bounce', the type of bounce received: 'hard', 'soft'. */
    type?: string;
    /** If the action is a 'click', the URL on which the member clicked. */
    url?: string;
}
