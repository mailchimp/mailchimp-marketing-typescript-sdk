//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about a specific cart.
 */
export interface ECommerceCart {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ECommerceCartLinksItem[];
    /** A string that uniquely identifies the campaign associated with a cart. */
    campaignId?: string;
    /** The URL for the cart. This parameter is required for [Abandoned Cart](https://mailchimp.com/help/create-a-classic-abandoned-cart-email/) automations. */
    checkoutUrl?: string;
    /** The date and time the cart was created in ISO 8601 format. */
    createdAt?: Date;
    /** The three-letter ISO 4217 code for the currency that the cart uses. */
    currencyCode?: string;
    customer?: Mailchimp.ECommerceCustomer;
    /** A unique identifier for the cart. */
    id?: string;
    /** An array of the cart's line items. */
    lines?: Mailchimp.ECommerceCartLineItem[];
    /** The order total for the cart. */
    orderTotal?: number;
    /** The total tax for the cart. */
    taxTotal?: number;
    /** The date and time the cart was last updated in ISO 8601 format. */
    updatedAt?: Date;
}
