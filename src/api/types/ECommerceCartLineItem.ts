//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about a specific cart line item.
 */
export interface ECommerceCartLineItem {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ECommerceCartLineItemLinksItem[];
    /** A unique identifier for the cart line item. */
    id?: string;
    /** The price of a cart line item. */
    price?: number;
    /** A unique identifier for the product associated with the cart line item. */
    productId?: string;
    /** The name of the product for the cart line item. */
    productTitle?: string;
    /** A unique identifier for the product variant associated with the cart line item. */
    productVariantId?: string;
    /** The name of the product variant for the cart line item. */
    productVariantTitle?: string;
    /** The quantity of a cart line item. */
    quantity?: number;
}
