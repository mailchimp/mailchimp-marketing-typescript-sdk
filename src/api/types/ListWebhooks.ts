//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Webhook configured for the given list.
 */
export interface ListWebhooks {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListWebhooksLinksItem[];
    /** The events that can trigger the webhook and whether they are enabled. */
    events?: Mailchimp.ListWebhooksEvents;
    /** An string that uniquely identifies this webhook. */
    id?: string;
    /** The unique id for the list. */
    listId?: string;
    /** Whether outbound deliveries are HMAC-signed. */
    signingEnabled?: boolean;
    /** The possible sources of any events that can trigger the webhook and whether they are enabled. */
    sources?: Mailchimp.ListWebhooksSources;
    /** A valid URL for the Webhook. */
    url?: string;
}
