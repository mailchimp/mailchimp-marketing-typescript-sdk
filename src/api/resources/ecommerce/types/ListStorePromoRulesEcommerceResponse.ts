//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A collection of the store's promo rules.
 */
export interface ListStorePromoRulesEcommerceResponse {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: ListStorePromoRulesEcommerceResponse.Links.Item[] | undefined;
    /** An array of objects, each representing promo rules defined for a store. */
    promo_rules?: Mailchimp.ECommercePromoRule[] | undefined;
    /** The store id. */
    store_id?: string | undefined;
    /** The total number of items matching the query regardless of pagination. */
    total_items?: number | undefined;
}

export namespace ListStorePromoRulesEcommerceResponse {
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
