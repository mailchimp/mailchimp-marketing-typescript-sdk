//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A folder used to organize campaigns.
 */
export interface GetCampaignFoldersResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.GetCampaignFoldersResponseLinksItem[];
    /** The number of campaigns in the folder. */
    count?: number;
    /** A string that uniquely identifies this campaign folder. */
    id?: string;
    /** The name of the folder. */
    name?: string;
}
