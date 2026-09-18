//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         customerId: "customer_id",
 *         body: {}
 *     }
 */
export interface UpdateStoreCustomerEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** The id for the customer of a store. */
    customerId: string;
    body: Mailchimp.EcommerceStoresCartsPatch;
}
