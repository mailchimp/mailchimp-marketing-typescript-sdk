//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         batchWebhookId: "batch_webhook_id"
 *     }
 */
export interface GetBatchWebhooksRequest {
    /** The unique id for the batch webhook. */
    batchWebhookId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}
