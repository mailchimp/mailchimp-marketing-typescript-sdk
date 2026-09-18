//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A list of campaign folders
 */
export interface CampaignFolders {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.CampaignFoldersLinksItem[];
    /** An array of objects representing campaign folders. */
    folders?: Mailchimp.CampaignFoldersFoldersItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}
