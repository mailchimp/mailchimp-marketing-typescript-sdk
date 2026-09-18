//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * abandonedCart automation details.
 */
export interface ECommerceStoreAutomationsAbandonedCart {
    /** Unique ID of automation parent campaign. */
    id?: string;
    /** Whether this store supports the abandonedCart automation. */
    isSupported?: boolean;
    /** Status of the abandonedCart automation. */
    status?: Mailchimp.ECommerceStoreAutomationsAbandonedCartStatus;
}
