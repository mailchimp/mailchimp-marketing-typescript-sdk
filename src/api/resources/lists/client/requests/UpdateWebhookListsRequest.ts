//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         list_id: "list_id",
 *         webhook_id: "webhook_id",
 *         body: {}
 *     }
 */
export interface UpdateWebhookListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** The webhook's id. */
    webhook_id: string;
    body: Mailchimp.AddWebhook;
}
