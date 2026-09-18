//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of the store's promo codes.
 */
export interface ListStorePromoRulePromoCodesEcommerceResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListStorePromoRulePromoCodesEcommerceResponseLinksItem[];
    /** An array of objects, each representing promo codes defined for a store. */
    promoCodes?: Mailchimp.ECommercePromoCode[];
    /** The store id. */
    storeId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}
