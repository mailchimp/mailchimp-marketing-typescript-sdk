//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A breakdown of clicks by different groups of an A/B Split campaign. Does not return information about Multivariate Campaigns.
 */
export interface ClickDetailReportAbSplit {
    /** Stats for Group A. */
    a?: Mailchimp.ClickDetailReportAbSplitA;
    /** Stats for Group B. */
    b?: Mailchimp.ClickDetailReportAbSplitB;
}
