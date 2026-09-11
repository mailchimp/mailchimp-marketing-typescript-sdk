//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         list_id: "list_id",
 *         body: {}
 *     }
 */
export interface CreateWebhookListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    body: Mailchimp.AddWebhook;
}
