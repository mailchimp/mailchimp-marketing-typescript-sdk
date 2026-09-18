//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * abandonedBrowse automation details. abandonedBrowse is also known as Product Retargeting Email or Retarget Site Visitors on the web.
 */
export interface ECommerceStoreAutomationsAbandonedBrowse {
    /** Unique ID of automation parent campaign. */
    id?: string;
    /** Whether this store supports the abandonedBrowse automation. */
    isSupported?: boolean;
    /** Status of the abandonedBrowse automation. */
    status?: Mailchimp.ECommerceStoreAutomationsAbandonedBrowseStatus;
}
