//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         listId: "list_id",
 *         body: {}
 *     }
 */
export interface CreateWebhookListsRequest {
    /** The unique ID for the list. */
    listId: string;
    body: Mailchimp.AddWebhook;
}
