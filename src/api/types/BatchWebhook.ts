//  This file was auto-generated from our API Definition.

/**
 * A webhook configured for batch status updates.
 */
export interface BatchWebhook {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: BatchWebhook.Links.Item[][] | undefined;
    /** Whether the webhook receives requests or not. */
    enabled?: boolean | undefined;
    /** A string that uniquely identifies this Batch Webhook. */
    id?: string | undefined;
    /** Whether outbound deliveries are HMAC-signed. */
    signing_enabled?: boolean | undefined;
    /** The HMAC signing secret. Returned exactly once at creation. This should be stored securely; if lost, delete and recreate the webhook to obtain a new secret. */
    signing_secret?: string | undefined;
    /** A valid URL for the Webhook. */
    url?: string | undefined;
}

export namespace BatchWebhook {
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
}
