//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about a specific product.
 */
export interface EcommerceStoresOrdersPost {
    /** The description of a product. */
    description?: string;
    /** The handle of a product. */
    handle?: string;
    /** A unique identifier for the product. */
    id: Mailchimp.EcommerceStoresOrdersPostId;
    /** The image URL for a product. */
    imageUrl?: string;
    /** An array of the product's images. */
    images?: Mailchimp.EcommerceStoresOrdersPostImagesItem[];
    /** The date and time the product was published. */
    publishedAtForeign?: string;
    /** The title of a product. */
    title: string;
    /** The type of product. */
    type?: string;
    /** The URL for a product. */
    url?: string;
    /** An array of the product's variants. At least one variant is required for each product. A variant can use the same `id` and `title` as the parent product. */
    variants: Mailchimp.EcommerceStoresOrdersPostVariantsItem[];
    /** The vendor for a product. */
    vendor?: string;
}
