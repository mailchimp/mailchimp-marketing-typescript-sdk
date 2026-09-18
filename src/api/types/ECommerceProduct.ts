//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about a specific product.
 */
export interface ECommerceProduct {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ECommerceProductLinksItem[];
    /** The currency code */
    currencyCode?: string;
    /** The description of a product. */
    description?: string;
    /** The handle of a product. */
    handle?: string;
    /** A unique identifier for the product. */
    id?: string;
    /** The image URL for a product. */
    imageUrl?: string;
    /** An array of the product's images. */
    images?: Mailchimp.ECommerceProductImagesItem[];
    /** The date and time the product was published in ISO 8601 format. */
    publishedAtForeign?: Date;
    /** The title of a product. */
    title?: string;
    /** The type of product. */
    type?: string;
    /** The URL for a product. */
    url?: string;
    /** Returns up to 50 of the product's variants. To retrieve all variants use [Product Variants](https://mailchimp.com/developer/marketing/api/ecommerce-product-variants/). */
    variants?: Mailchimp.ECommerceProductVariant[];
    /** The vendor for a product. */
    vendor?: string;
}
