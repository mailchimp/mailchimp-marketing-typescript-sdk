//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         outreach_id: "outreach_id"
 *     }
 */
export interface ListFacebookAdEcommerceProductActivityReportingRequest {
    /** The outreach id. */
    outreach_id: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
    /** The number of records to return. Default value is 10. Maximum value is 1000 */
    count?: number;
    /** Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this is the number of records from a collection to skip. Default value is 0. */
    offset?: number;
    /** Returns files sorted by the specified field. */
    sort_field?: Mailchimp.ListFacebookAdEcommerceProductActivityReportingRequestSortField;
}
