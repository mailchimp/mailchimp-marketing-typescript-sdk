//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         batchWebhookId: "batch_webhook_id"
 *     }
 */
export interface UpdateBatchWebhooksRequest {
    /** The unique id for the batch webhook. */
    batchWebhookId: string;
    /** Whether the webhook receives requests or not. */
    enabled?: boolean;
    /** A valid URL for the Webhook. */
    url?: string;
}
