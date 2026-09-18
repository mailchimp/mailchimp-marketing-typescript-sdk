//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * [A/B Testing](https://mailchimp.com/help/about-ab-tests/) options for a campaign.
 */
export interface AbTestingOptions {
    /** For campaigns split on 'From Name', the name for Group A. */
    fromNameA?: string;
    /** For campaigns split on 'From Name', the name for Group B. */
    fromNameB?: string;
    /** How we should evaluate a winner. Based on 'opens', 'clicks', or 'manual'. */
    pickWinner?: Mailchimp.AbTestingOptionsPickWinner;
    /** For campaigns split on 'From Name', the reply-to address for Group A. */
    replyEmailA?: string;
    /** For campaigns split on 'From Name', the reply-to address for Group B. */
    replyEmailB?: string;
    /** The send time for Group A. */
    sendTimeA?: Date;
    /** The send time for Group B. */
    sendTimeB?: Date;
    /** The send time for the winning version. */
    sendTimeWinner?: string;
    /** The size of the split groups. Campaigns split based on 'schedule' are forced to have a 50/50 split. Valid split integers are between 1-50. */
    splitSize?: number;
    /** The type of AB split to run. */
    splitTest?: Mailchimp.AbTestingOptionsSplitTest;
    /** For campaigns split on 'Subject Line', the subject line for Group A. */
    subjectA?: string;
    /** For campaigns split on 'Subject Line', the subject line for Group B. */
    subjectB?: string;
    /** The amount of time to wait before picking a winner. This cannot be changed after a campaign is sent. */
    waitTime?: number;
    /** How unit of time for measuring the winner ('hours' or 'days'). This cannot be changed after a campaign is sent. */
    waitUnits?: Mailchimp.AbTestingOptionsWaitUnits;
}
