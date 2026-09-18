//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A list of a member's subscriber activity in a specific campaign, including opens, clicks, and bounces.
 */
export interface EmailActivity {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.EmailActivityLinksItem[];
    /** An array of objects, each showing an interaction with the email. Member activity limited to 1,000 open activities and 1,000 click activities per member per campaign. */
    activity?: Mailchimp.EmailActivityActivityItem[];
    /** The unique id for the campaign. */
    campaignId?: string;
    /** Email address for a subscriber. */
    emailAddress?: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    emailId?: string;
    /** The unique id for the list. */
    listId?: string;
    /** The status of the list used, namely if it's deleted or disabled. */
    listIsActive?: boolean;
}
