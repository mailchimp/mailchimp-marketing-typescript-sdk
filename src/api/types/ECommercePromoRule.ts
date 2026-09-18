//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about an Ecommerce Store's specific Promo Rule
 */
export interface ECommercePromoRule {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ECommercePromoRuleLinksItem[];
    /** The amount of the promo code discount. If 'type' is 'fixed', the amount is treated as a monetary value. If 'type' is 'percentage', amount must be a decimal value between 0.0 and 1.0, inclusive. */
    amount?: number;
    /** The date and time the promotion was created in ISO 8601 format. */
    createdAtForeign?: Date;
    /** The description of a promotion restricted to UTF-8 characters with max length 255. */
    description?: string;
    /** Whether the promo rule is currently enabled. */
    enabled?: boolean;
    /** The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format. */
    endsAt?: string;
    /** A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50. */
    id?: string;
    /** The date and time when the promotion is in effect in ISO 8601 format. */
    startsAt?: Date;
    /** The target that the discount applies to. */
    target?: Mailchimp.ECommercePromoRuleTarget;
    /** The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length of 100 bytes. */
    title?: string;
    /** Type of discount. For free shipping set type to fixed. */
    type?: Mailchimp.ECommercePromoRuleType;
    /** The date and time the promotion was updated in ISO 8601 format. */
    updatedAtForeign?: Date;
}
