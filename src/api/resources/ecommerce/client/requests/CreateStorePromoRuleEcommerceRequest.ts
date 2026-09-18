//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         amount: 1.1,
 *         description: "Save BIG during our summer sale!",
 *         id: "id",
 *         target: "per_item",
 *         type: "fixed"
 *     }
 */
export interface CreateStorePromoRuleEcommerceRequest {
    /** The store id. */
    storeId: string;
    amount: Mailchimp.CreateStorePromoRuleEcommerceRequestAmount;
    /** The date and time the promotion was created in ISO 8601 format. */
    createdAtForeign?: string;
    /** The description of a promotion restricted to UTF-8 characters with max length 255. */
    description: string;
    /** Whether the promo rule is currently enabled. */
    enabled?: boolean;
    endsAt?: Mailchimp.CreateStorePromoRuleEcommerceRequestEndsAt;
    /** A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50. */
    id: string;
    startsAt?: Mailchimp.CreateStorePromoRuleEcommerceRequestStartsAt;
    /** The target that the discount applies to. */
    target: Mailchimp.CreateStorePromoRuleEcommerceRequestTarget;
    /** The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length of 100 bytes. */
    title?: string;
    /** Type of discount. For free shipping set type to fixed. */
    type: Mailchimp.CreateStorePromoRuleEcommerceRequestType;
    /** The date and time the promotion was updated in ISO 8601 format. */
    updatedAtForeign?: string;
}
