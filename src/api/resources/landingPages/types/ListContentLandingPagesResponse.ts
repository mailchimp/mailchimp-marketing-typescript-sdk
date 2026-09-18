//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The HTML content for a landing page.
 */
export interface ListContentLandingPagesResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListContentLandingPagesResponseLinksItem[];
    /** The raw HTML for the landing page. */
    html?: string;
    /** The JSON Structure for the landing page */
    json?: string;
}
