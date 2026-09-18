//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about a specific product variant.
 */
export interface EcommerceStoresOrdersPostVariantsItem {
    /** The backorders of a product variant. */
    backorders?: string;
    /** A unique identifier for the product variant. */
    id: Mailchimp.EcommerceStoresOrdersPostVariantsItemId;
    /** The image URL for a product variant. */
    imageUrl?: string;
    /** The inventory quantity of a product variant. */
    inventoryQuantity?: number;
    price?: Mailchimp.EcommerceStoresOrdersPostVariantsItemPrice;
    /** The stock keeping unit (SKU) of a product variant. */
    sku?: string;
    /** The title of a product variant. */
    title: string;
    /** The URL for a product variant. */
    url?: string;
    /** The visibility of a product variant. */
    visibility?: string;
}
