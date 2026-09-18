//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of landing pages.
 */
export interface ListLandingPagesResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListLandingPagesResponseLinksItem[];
    /** The landing pages on the account */
    landingPages?: Mailchimp.LandingPage[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}
