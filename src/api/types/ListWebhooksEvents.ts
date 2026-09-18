//  This file was auto-generated from our API Definition.

/**
 * The events that can trigger the webhook and whether they are enabled.
 */
export interface ListWebhooksEvents {
    /** Whether the webhook is triggered when a campaign is sent or cancelled. */
    campaign?: boolean;
    /** Whether the webhook is triggered when a subscriber's email address is cleaned from the list. */
    cleaned?: boolean;
    /** Whether the webhook is triggered when a contact's profile is updated. This includes email subscribers and SMS-only contacts [BETA]. */
    profile?: boolean;
    /** Whether the webhook is triggered when a list subscriber is added. */
    subscribe?: boolean;
    /** Whether the webhook is triggered when a list member unsubscribes. */
    unsubscribe?: boolean;
    /** Whether the webhook is triggered when a subscriber's email address is changed. */
    upemail?: boolean;
    /** [BETA] Whether the webhook is triggered when a contact subscribes to SMS. */
    smsSubscribe?: boolean;
    /** [BETA] Whether the webhook is triggered when a contact unsubscribes from SMS. */
    smsUnsubscribe?: boolean;
    /** [BETA] Whether the webhook is triggered when a contact's SMS phone number is updated. */
    upsms?: boolean;
    /** [BETA] Whether the webhook is triggered when an SMS campaign is sent. */
    smsCampaign?: boolean;
}
