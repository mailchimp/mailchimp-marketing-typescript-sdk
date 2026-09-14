//  This file was auto-generated from our API Definition.

/**
 * Information about a specific cart line item.
 */
export interface ECommerceCartLineItem {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: ECommerceCartLineItem.Links.Item[] | undefined;
    /** A unique identifier for the cart line item. */
    id?: string | undefined;
    /** The price of a cart line item. */
    price?: number | undefined;
    /** A unique identifier for the product associated with the cart line item. */
    product_id?: string | undefined;
    /** The name of the product for the cart line item. */
    product_title?: string | undefined;
    /** A unique identifier for the product variant associated with the cart line item. */
    product_variant_id?: string | undefined;
    /** The name of the product variant for the cart line item. */
    product_variant_title?: string | undefined;
    /** The quantity of a cart line item. */
    quantity?: number | undefined;
}

export namespace ECommerceCartLineItem {
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
