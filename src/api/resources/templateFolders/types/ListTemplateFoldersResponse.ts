//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A list of template folders
 */
export interface ListTemplateFoldersResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListTemplateFoldersResponseLinksItem[];
    /** An array of objects representing template folders. */
    folders?: Mailchimp.ListTemplateFoldersResponseFoldersItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}
