//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Open and click rates for this subscriber.
 */
export interface ListMembersStats {
    /** A subscriber's average clickthrough rate. */
    avgClickRate?: number;
    /** A subscriber's average open rate. */
    avgOpenRate?: number;
    /** Ecommerce stats for the list member if the list is attached to a store. */
    ecommerceData?: Mailchimp.ListMembersStatsEcommerceData;
}
