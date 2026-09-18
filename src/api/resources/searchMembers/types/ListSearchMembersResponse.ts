//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Members found for given search term
 */
export interface ListSearchMembersResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListSearchMembersResponseLinksItem[];
    /** Exact matches of the provided search query. */
    exactMatches?: Mailchimp.ListSearchMembersResponseExactMatches;
    /** Partial matches of the provided search query. */
    fullSearch?: Mailchimp.ListSearchMembersResponseFullSearch;
}
