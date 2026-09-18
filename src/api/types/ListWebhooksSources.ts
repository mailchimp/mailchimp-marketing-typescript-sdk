//  This file was auto-generated from our API Definition.

/**
 * The possible sources of any events that can trigger the webhook and whether they are enabled.
 */
export interface ListWebhooksSources {
    /** Whether the webhook is triggered by admin-initiated actions in the web interface. */
    admin?: boolean;
    /** Whether the webhook is triggered by actions initiated via the API. */
    api?: boolean;
    /** Whether the webhook is triggered by subscriber-initiated actions. */
    user?: boolean;
}
