//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         currencyCode: "currency_code",
 *         customer: {
 *             id: "id"
 *         },
 *         id: "id",
 *         lines: [{
 *                 id: "id",
 *                 price: 1.1,
 *                 productId: "product_id",
 *                 productVariantId: "product_variant_id",
 *                 quantity: 1
 *             }],
 *         orderTotal: 1.1
 *     }
 */
export interface CreateStoreCartEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** A string that uniquely identifies the campaign for a cart. */
    campaignId?: string;
    /** The URL for the cart. This parameter is required for [Abandoned Cart](https://mailchimp.com/help/create-a-classic-abandoned-cart-email/) automations. */
    checkoutUrl?: string;
    /** The three-letter ISO 4217 code for the currency that the cart uses. */
    currencyCode: string;
    customer: Mailchimp.EcommerceStoresCartsPost;
    /** A unique identifier for the cart. */
    id: Mailchimp.CreateStoreCartEcommerceRequestId;
    /** An array of the cart's line items. */
    lines: Mailchimp.CreateStoreCartEcommerceRequestLinesItem[];
    orderTotal: Mailchimp.CreateStoreCartEcommerceRequestOrderTotal;
    taxTotal?: Mailchimp.CreateStoreCartEcommerceRequestTaxTotal;
}
