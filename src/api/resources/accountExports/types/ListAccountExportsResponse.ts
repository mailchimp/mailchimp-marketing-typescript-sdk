//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * An array of objects, each representing an account export.
 */
export interface ListAccountExportsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListAccountExportsResponseLinksItem[];
    /** An array of objects, each representing an account export. */
    exports?: Mailchimp.ListAccountExportsResponseExportsItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}
