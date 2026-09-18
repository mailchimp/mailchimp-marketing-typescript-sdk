//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

export interface CreateWebhookListsResponse extends Mailchimp.ListWebhooks {
    /** The HMAC signing secret. Returned exactly once at creation. This should be stored securely; if lost, delete and recreate the webhook to obtain a new secret. */
    signingSecret?: string;
}
