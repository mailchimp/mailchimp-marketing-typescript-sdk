//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * One day's worth of list activity. Doesn't include Automation activity.
 */
export interface ListActivityListsResponseActivityItem {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListActivityListsResponseActivityItemLinksItem[];
    /** The date for the activity summary. */
    day?: string;
    /** The total number of emails sent on the date for the activity summary. */
    emailsSent?: number;
    /** The number of hard bounces. */
    hardBounce?: number;
    /** The number of subscribers who may have been added outside of the [double opt-in process](https://mailchimp.com/help/about-double-opt-in/), such as imports or API activity. */
    otherAdds?: number;
    /** The number of subscribers who may have been removed outside of unsubscribing or reporting an email as spam (for example, deleted subscribers). */
    otherRemoves?: number;
    /** The number of clicks. */
    recipientClicks?: number;
    /** The number of soft bounces */
    softBounce?: number;
    /** The number of subscribes. */
    subs?: number;
    /** The number of unique opens. */
    uniqueOpens?: number;
    /** The number of unsubscribes. */
    unsubs?: number;
}
