//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A list of all folders in the File Manager.
 */
export interface ListFoldersFileManagerResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListFoldersFileManagerResponseLinksItem[];
    /** A list of all folders in the File Manager. */
    folders?: Mailchimp.ListFoldersFileManagerResponseFoldersItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}
