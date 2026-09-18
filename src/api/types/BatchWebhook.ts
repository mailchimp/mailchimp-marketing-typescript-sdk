//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A webhook configured for batch status updates.
 */
export interface BatchWebhook {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.BatchWebhookLinksItemItem[][];
    /** Whether the webhook receives requests or not. */
    enabled?: boolean;
    /** A string that uniquely identifies this Batch Webhook. */
    id?: string;
    /** Whether outbound deliveries are HMAC-signed. */
    signingEnabled?: boolean;
    /** A valid URL for the Webhook. */
    url?: string;
}
