//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A detailed report of any campaign emails that were opened by a list member.
 */
export interface ListOpenDetailsReportsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListOpenDetailsReportsResponseLinksItem[];
    /** The campaign id. */
    campaignId?: string;
    /** An array of objects, each representing a list member who opened a campaign email. Each members object will contain information about the number of total opens by a single member, as well as timestamps for each open event. */
    members?: Mailchimp.OpenActivity[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
    /** The total number of opens matching the query regardless of pagination. */
    totalOpens?: number;
    /** The total number of opens excluding opens from email clients that use proxies regardless of pagination. */
    totalProxyExcludedOpens?: number;
}
