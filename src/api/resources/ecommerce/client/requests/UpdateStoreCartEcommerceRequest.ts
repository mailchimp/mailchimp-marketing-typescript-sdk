//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         cartId: "cart_id"
 *     }
 */
export interface UpdateStoreCartEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** The id for the cart. */
    cartId: string;
    /** A string that uniquely identifies the campaign associated with a cart. */
    campaignId?: string;
    /** The URL for the cart. This parameter is required for [Abandoned Cart](https://mailchimp.com/help/create-a-classic-abandoned-cart-email/) automations. */
    checkoutUrl?: string;
    /** The three-letter ISO 4217 code for the currency that the cart uses. */
    currencyCode?: string;
    customer?: Mailchimp.EcommerceStoresCartsPatch;
    /** A unique identifier for the cart. */
    id?: Mailchimp.UpdateStoreCartEcommerceRequestId;
    /** An array of the cart's line items. */
    lines?: Mailchimp.UpdateStoreCartEcommerceRequestLinesItem[];
    orderTotal?: Mailchimp.UpdateStoreCartEcommerceRequestOrderTotal;
    taxTotal?: Mailchimp.UpdateStoreCartEcommerceRequestTaxTotal;
}
