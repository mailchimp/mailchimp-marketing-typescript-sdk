//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of the store's promo rules.
 */
export interface ListStorePromoRulesEcommerceResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListStorePromoRulesEcommerceResponseLinksItem[];
    /** An array of objects, each representing promo rules defined for a store. */
    promoRules?: Mailchimp.ECommercePromoRule[];
    /** The store id. */
    storeId?: string;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}
