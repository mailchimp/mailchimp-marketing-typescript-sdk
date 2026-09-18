//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Default content for a template.
 */
export interface ListDefaultContentTemplatesResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListDefaultContentTemplatesResponseLinksItem[];
    /** The sections that you can edit in the template, including each section's default content. */
    sections?: Record<string, unknown>;
}
