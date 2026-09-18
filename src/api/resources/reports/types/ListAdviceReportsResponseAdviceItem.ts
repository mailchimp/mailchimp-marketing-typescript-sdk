//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Campaign feedback details.
 */
export interface ListAdviceReportsResponseAdviceItem {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListAdviceReportsResponseAdviceItemLinksItem[];
    /** The advice message. */
    message?: string;
    /** The sentiment type for a feedback message. */
    type?: Mailchimp.ListAdviceReportsResponseAdviceItemType;
}
