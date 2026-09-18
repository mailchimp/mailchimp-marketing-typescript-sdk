//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         listId: "list_id",
 *         webhookId: "webhook_id",
 *         body: {}
 *     }
 */
export interface UpdateWebhookListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The webhook's id. */
    webhookId: string;
    body: Mailchimp.AddWebhook;
}
