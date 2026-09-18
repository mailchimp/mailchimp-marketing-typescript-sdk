//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of landing pages.
 */
export interface ListLandingPagesReportingResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListLandingPagesReportingResponseLinksItem[];
    landingPages?: Mailchimp.LandingPageReport[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}
