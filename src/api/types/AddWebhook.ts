//  This file was auto-generated from our API Definition.

/**
 * Configure a webhook for the given list.
 */
export interface AddWebhook {
    /** The events that can trigger the webhook and whether they are enabled. */
    events?: AddWebhook.Events | undefined;
    /** The possible sources of any events that can trigger the webhook and whether they are enabled. */
    sources?: AddWebhook.Sources | undefined;
    /** A valid URL for the Webhook. */
    url?: string | undefined;
}

export namespace AddWebhook {
    /**
     * The events that can trigger the webhook and whether they are enabled.
     */
    export interface Events {
        /** Whether the webhook is triggered when a campaign is sent or cancelled. */
        campaign?: boolean | undefined;
        /** Whether the webhook is triggered when a subscriber's email address is cleaned from the list. */
        cleaned?: boolean | undefined;
        /** Whether the webhook is triggered when a contact's profile is updated. This includes email subscribers and SMS-only contacts [BETA]. */
        profile?: boolean | undefined;
        /** Whether the webhook is triggered when a list subscriber is added. */
        subscribe?: boolean | undefined;
        /** Whether the webhook is triggered when a list member unsubscribes. */
        unsubscribe?: boolean | undefined;
        /** Whether the webhook is triggered when a subscriber's email address is changed. */
        upemail?: boolean | undefined;
        /** [BETA] Whether the webhook is triggered when a contact subscribes to SMS. */
        sms_subscribe?: boolean | undefined;
        /** [BETA] Whether the webhook is triggered when a contact unsubscribes from SMS. */
        sms_unsubscribe?: boolean | undefined;
        /** [BETA] Whether the webhook is triggered when a contact's SMS phone number is updated. */
        upsms?: boolean | undefined;
        /** [BETA] Whether the webhook is triggered when an SMS campaign is sent. */
        sms_campaign?: boolean | undefined;
    }

    /**
     * The possible sources of any events that can trigger the webhook and whether they are enabled.
     */
    export interface Sources {
        /** Whether the webhook is triggered by admin-initiated actions in the web interface. */
        admin?: boolean | undefined;
        /** Whether the webhook is triggered by actions initiated via the API. */
        api?: boolean | undefined;
        /** Whether the webhook is triggered by subscriber-initiated actions. */
        user?: boolean | undefined;
    }
}
