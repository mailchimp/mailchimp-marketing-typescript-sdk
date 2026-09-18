//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about a specific connected site.
 */
export interface ConnectedSite {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ConnectedSiteLinksItem[];
    /** The date and time the connected site was created in ISO 8601 format. */
    createdAt?: Date;
    /** The connected site domain. */
    domain?: string;
    /** The unique identifier for the site. */
    foreignId?: string;
    /** The platform of the connected site. */
    platform?: string;
    /** The script used to connect your site with Mailchimp. */
    siteScript?: Mailchimp.ConnectedSiteSiteScript;
    /** The unique identifier for the ecommerce store that's associated with the connected site (if any). The store_id for a specific connected site can't change. */
    storeId?: string;
    /** The date and time the connected site was last updated in ISO 8601 format. */
    updatedAt?: Date;
}
