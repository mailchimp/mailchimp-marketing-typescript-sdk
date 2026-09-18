//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about a specific order line.
 */
export interface ECommerceOrderLineItem {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ECommerceOrderLineItemLinksItem[];
    /** The total discount amount applied to a line item. */
    discount?: number;
    /** A unique identifier for an order line item. */
    id?: string;
    /** The image URL for a product. */
    imageUrl?: string;
    price?: Mailchimp.ECommerceOrderLineItemPrice;
    /** A unique identifier for the product associated with an order line item. */
    productId?: string;
    /** The name of the product for an order line item. */
    productTitle?: string;
    /** A unique identifier for the product variant associated with an order line item. */
    productVariantId?: string;
    /** The name of the product variant for an order line item. */
    productVariantTitle?: string;
    /** The order line item quantity. */
    quantity?: number;
}
