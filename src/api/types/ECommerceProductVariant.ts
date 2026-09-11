//  This file was auto-generated from our API Definition.

/**
 * Information about a specific product variant.
 */
export interface ECommerceProductVariant {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: ECommerceProductVariant.Links.Item[] | undefined;
    /** The backorders of a product variant. */
    backorders?: string | undefined;
    /** The date and time the product was created in ISO 8601 format. */
    created_at?: string | undefined;
    /** A unique identifier for the product variant. */
    id?: string | undefined;
    /** The image URL for a product variant. */
    image_url?: string | undefined;
    /** The inventory quantity of a product variant. */
    inventory_quantity?: number | undefined;
    /** The price of a product variant. */
    price?: number | undefined;
    /** The stock keeping unit (SKU) of a product variant. */
    sku?: string | undefined;
    /** The title of a product variant. */
    title?: string | undefined;
    /** The date and time the product was last updated in ISO 8601 format. */
    updated_at?: string | undefined;
    /** The URL for a product variant. */
    url?: string | undefined;
    /** The visibility of a product variant. */
    visibility?: string | undefined;
}

export namespace ECommerceProductVariant {
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
