//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Configure a webhook for the given list.
 */
export interface AddWebhook {
    /** The events that can trigger the webhook and whether they are enabled. */
    events?: Mailchimp.AddWebhookEvents;
    /** The possible sources of any events that can trigger the webhook and whether they are enabled. */
    sources?: Mailchimp.AddWebhookSources;
    /** A valid URL for the Webhook. */
    url?: string;
}
