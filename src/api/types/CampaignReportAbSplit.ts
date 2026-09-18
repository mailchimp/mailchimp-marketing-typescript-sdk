//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * General stats about different groups of an A/B Split campaign. Does not return information about Multivariate Campaigns.
 */
export interface CampaignReportAbSplit {
    /** Stats for Campaign A. */
    a?: Mailchimp.CampaignReportAbSplitA;
    /** Stats for Campaign B. */
    b?: Mailchimp.CampaignReportAbSplitB;
}
