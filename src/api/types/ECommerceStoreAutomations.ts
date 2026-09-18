//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Details for the automations attached to this store.
 */
export interface ECommerceStoreAutomations {
    /** abandonedBrowse automation details. abandonedBrowse is also known as Product Retargeting Email or Retarget Site Visitors on the web. */
    abandonedBrowse?: Mailchimp.ECommerceStoreAutomationsAbandonedBrowse;
    /** abandonedCart automation details. */
    abandonedCart?: Mailchimp.ECommerceStoreAutomationsAbandonedCart;
}
