//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A list an account's available templates.
 */
export interface ListTemplatesResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListTemplatesResponseLinksItem[];
    /** All of an account's saved or custom templates. */
    templates?: Mailchimp.TemplateInstance[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}
