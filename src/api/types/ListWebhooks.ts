//  This file was auto-generated from our API Definition.

/**
 * Webhook configured for the given list.
 */
export interface ListWebhooks {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: ListWebhooks.Links.Item[] | undefined;
    /** The events that can trigger the webhook and whether they are enabled. */
    events?: ListWebhooks.Events | undefined;
    /** An string that uniquely identifies this webhook. */
    id?: string | undefined;
    /** The unique id for the list. */
    list_id?: string | undefined;
    /** Whether outbound deliveries are HMAC-signed. */
    signing_enabled?: boolean | undefined;
    /** The HMAC signing secret. Returned exactly once at creation. This should be stored securely; if lost, delete and recreate the webhook to obtain a new secret. */
    signing_secret?: string | undefined;
    /** The possible sources of any events that can trigger the webhook and whether they are enabled. */
    sources?: ListWebhooks.Sources | undefined;
    /** A valid URL for the Webhook. */
    url?: string | undefined;
}

export namespace ListWebhooks {
    export type Links = Links.Item[];

    export namespace Links {
        /**
         * This object represents a link from the resource where it is found to another resource or action that may be performed.
         */
        export interface Item {
            /** This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action. */
            href?: string | undefined;
            /** The HTTP method that should be used when accessing the URL defined in 'href'. */
            method?: Item.Method | undefined;
            /** As with an HTML 'rel' attribute, this describes the type of link. */
            rel?: string | undefined;
            /** For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to. */
            schema?: string | undefined;
            /** For GETs, this is a URL representing the schema that the response should conform to. */
            targetSchema?: string | undefined;
        }

        export namespace Item {
            /** The HTTP method that should be used when accessing the URL defined in 'href'. */
            export const Method = {
                Get: "GET",
                Post: "POST",
                Put: "PUT",
                Patch: "PATCH",
                Delete: "DELETE",
                Options: "OPTIONS",
                Head: "HEAD",
            } as const;
            export type Method = (typeof Method)[keyof typeof Method];
        }
    }

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
