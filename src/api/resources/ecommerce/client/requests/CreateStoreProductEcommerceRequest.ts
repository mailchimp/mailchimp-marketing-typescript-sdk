//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         body: {
 *             id: "id",
 *             title: "Cat Hat",
 *             variants: [{
 *                     id: "id",
 *                     title: "Cat Hat"
 *                 }]
 *         }
 *     }
 */
export interface CreateStoreProductEcommerceRequest {
    /** The store id. */
    storeId: string;
    body: Mailchimp.EcommerceStoresOrdersPost;
}
