//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about a specific product variant.
 */
export interface ECommerceProductVariant {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ECommerceProductVariantLinksItem[];
    /** The backorders of a product variant. */
    backorders?: string;
    /** The date and time the product was created in ISO 8601 format. */
    createdAt?: Date;
    /** A unique identifier for the product variant. */
    id?: string;
    /** The image URL for a product variant. */
    imageUrl?: string;
    /** The inventory quantity of a product variant. */
    inventoryQuantity?: number;
    /** The price of a product variant. */
    price?: number;
    /** The stock keeping unit (SKU) of a product variant. */
    sku?: string;
    /** The title of a product variant. */
    title?: string;
    /** The date and time the product was last updated in ISO 8601 format. */
    updatedAt?: Date;
    /** The URL for a product variant. */
    url?: string;
    /** The visibility of a product variant. */
    visibility?: string;
}
