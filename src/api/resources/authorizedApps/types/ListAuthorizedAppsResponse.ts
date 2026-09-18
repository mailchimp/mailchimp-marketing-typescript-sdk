//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * An array of objects, each representing an authorized application.
 */
export interface ListAuthorizedAppsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListAuthorizedAppsResponseLinksItem[];
    /** An array of objects, each representing an authorized application. */
    apps?: Mailchimp.ListAuthorizedAppsResponseAppsItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}
