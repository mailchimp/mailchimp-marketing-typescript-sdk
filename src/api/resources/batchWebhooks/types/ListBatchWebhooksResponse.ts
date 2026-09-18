//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Manage webhooks for batch requests.
 */
export interface ListBatchWebhooksResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListBatchWebhooksResponseLinksItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
    /** An array of objects, each representing a Batch Webhook. */
    webhooks?: Mailchimp.BatchWebhook[];
}
