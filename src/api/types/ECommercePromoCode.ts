//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about an Ecommerce Store's specific Promo Code
 */
export interface ECommercePromoCode {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ECommercePromoCodeLinksItem[];
    /** The discount code. Restricted to UTF-8 characters with max length 50. */
    code?: string;
    /** The date and time the promotion was created in ISO 8601 format. */
    createdAtForeign?: Date;
    /** Whether the promo code is currently enabled. */
    enabled?: boolean;
    /** A unique identifier for the promo Code. */
    id?: string;
    /** The url that should be used in the promotion campaign restricted to UTF-8 characters with max length 2000. */
    redemptionUrl?: string;
    /** The date and time the promotion was updated in ISO 8601 format. */
    updatedAtForeign?: Date;
    /** Number of times promo code has been used. */
    usageCount?: number;
}
