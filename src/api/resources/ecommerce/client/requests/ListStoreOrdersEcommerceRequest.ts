//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         storeId: "store_id"
 *     }
 */
export interface ListStoreOrdersEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
    /** The number of records to return. Default value is 10. Maximum value is 1000 */
    count?: number;
    /** Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this is the number of records from a collection to skip. Default value is 0. */
    offset?: number;
    /** Restrict results to orders made by a specific customer. */
    customerId?: string;
    /** Restrict results to orders that have an outreach attached. For example, an email campaign or Facebook ad. */
    hasOutreach?: boolean;
    /** Restrict results to orders with a specific `campaign_id` value. */
    campaignId?: string;
    /** Restrict results to orders with a specific `outreach_id` value. */
    outreachId?: string;
}
