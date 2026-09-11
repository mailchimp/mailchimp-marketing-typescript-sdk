//  This file was auto-generated from our API Definition.

/**
 * Information about an Ecommerce Store's specific Promo Rule
 */
export interface ECommercePromoRule {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: ECommercePromoRule.Links.Item[] | undefined;
    /** The amount of the promo code discount. If 'type' is 'fixed', the amount is treated as a monetary value. If 'type' is 'percentage', amount must be a decimal value between 0.0 and 1.0, inclusive. */
    amount?: number | undefined;
    /** The date and time the promotion was created in ISO 8601 format. */
    created_at_foreign?: string | undefined;
    /** The description of a promotion restricted to UTF-8 characters with max length 255. */
    description?: string | undefined;
    /** Whether the promo rule is currently enabled. */
    enabled?: boolean | undefined;
    /** The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format. */
    ends_at?: string | undefined;
    /** A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50. */
    id?: string | undefined;
    /** The date and time when the promotion is in effect in ISO 8601 format. */
    starts_at?: string | undefined;
    /** The target that the discount applies to. */
    target?: ECommercePromoRule.Target | undefined;
    /** The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length of 100 bytes. */
    title?: string | undefined;
    /** Type of discount. For free shipping set type to fixed. */
    type?: ECommercePromoRule.Type | undefined;
    /** The date and time the promotion was updated in ISO 8601 format. */
    updated_at_foreign?: string | undefined;
}

export namespace ECommercePromoRule {
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

    /** The target that the discount applies to. */
    export const Target = {
        PerItem: "per_item",
        Total: "total",
        Shipping: "shipping",
    } as const;
    export type Target = (typeof Target)[keyof typeof Target];
    /** Type of discount. For free shipping set type to fixed. */
    export const Type = {
        Fixed: "fixed",
        Percentage: "percentage",
    } as const;
    export type Type = (typeof Type)[keyof typeof Type];
}
