//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * The Connected Site associated with the store.
 */
export interface ECommerceStoreConnectedSite {
    /** The unique identifier for the connected site. */
    siteForeignId?: string;
    /** The script used to connect your site with Mailchimp. */
    siteScript?: Mailchimp.ECommerceStoreConnectedSiteSiteScript;
}
