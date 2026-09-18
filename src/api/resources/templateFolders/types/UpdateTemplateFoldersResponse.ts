//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A folder used to organize templates.
 */
export interface UpdateTemplateFoldersResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.UpdateTemplateFoldersResponseLinksItem[];
    /** The number of templates in the folder. */
    count?: number;
    /** A string that uniquely identifies this template folder. */
    id?: string;
    /** The name of the folder. */
    name?: string;
}
