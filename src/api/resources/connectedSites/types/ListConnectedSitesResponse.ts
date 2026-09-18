//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of connected sites in the account.
 */
export interface ListConnectedSitesResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListConnectedSitesResponseLinksItem[];
    /** An array of objects, each representing a connected site. */
    sites?: Mailchimp.ConnectedSite[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}
