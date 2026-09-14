//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         store_id: "store_id",
 *         order_id: "order_id"
 *     }
 */
export interface UpdateStoreOrderEcommerceRequest {
    /** The store id. */
    store_id: string;
    /** The id for the order in a store. */
    order_id: string;
    /** The billing address for the order. */
    billing_address?: UpdateStoreOrderEcommerceRequest.BillingAddress;
    /** A string that uniquely identifies the campaign associated with an order. */
    campaign_id?: string;
    /** A cart id that the order was placed for. */
    cart_id?: UpdateStoreOrderEcommerceRequest.CartId;
    /** The date and time the order was cancelled in ISO 8601 format. Note: passing a value for this parameter will cancel the order being edited. */
    cancelled_at_foreign?: string;
    /** The three-letter ISO 4217 code for the currency that the store accepts. */
    currency_code?: string;
    customer?: Mailchimp.EcommerceStoresCartsPatch;
    discount_total?: UpdateStoreOrderEcommerceRequest.DiscountTotal;
    /** The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications). */
    financial_status?: string;
    /** The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications). */
    fulfillment_status?: string;
    /** A unique identifier for the order. */
    id?: string;
    /** The URL for the page where the buyer landed when entering the shop. */
    landing_site?: string;
    /** An array of the order's line items. */
    lines?: UpdateStoreOrderEcommerceRequest.Lines.Item[];
    order_total?: UpdateStoreOrderEcommerceRequest.OrderTotal;
    /** The URL for the order. */
    order_url?: string;
    /** The outreach associated with this order. For example, an email campaign or Facebook ad. */
    outreach?: UpdateStoreOrderEcommerceRequest.Outreach;
    /** The date and time the order was processed in ISO 8601 format. */
    processed_at_foreign?: string;
    /** The promo codes applied on the order. Note: Patch will completely replace the value of promos with the new one provided. */
    promos?: UpdateStoreOrderEcommerceRequest.Promos.Item[];
    /** The shipping address for the order. */
    shipping_address?: UpdateStoreOrderEcommerceRequest.ShippingAddress;
    shipping_total?: UpdateStoreOrderEcommerceRequest.ShippingTotal;
    tax_total?: UpdateStoreOrderEcommerceRequest.TaxTotal;
    /** The tracking carrier associated with the order. */
    tracking_carrier?: string;
    /** The Mailchimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs. */
    tracking_code?: UpdateStoreOrderEcommerceRequest.TrackingCode;
    /** The tracking number associated with the order. */
    tracking_number?: string;
    /** The tracking URL associated with the order. */
    tracking_url?: string;
    /** The date and time the order was updated in ISO 8601 format. */
    updated_at_foreign?: string;
}

export namespace UpdateStoreOrderEcommerceRequest {
    /**
     * The billing address for the order.
     */
    export interface BillingAddress {
        /** The billing address for the order. */
        address1?: string | undefined;
        /** An additional field for the billing address. */
        address2?: string | undefined;
        /** The city in the billing address. */
        city?: string | undefined;
        /** The company associated with the billing address. */
        company?: string | undefined;
        /** The country in the billing address. */
        country?: string | undefined;
        /** The two-letter code for the country in the billing address. */
        country_code?: string | undefined;
        /** The latitude for the billing address location. */
        latitude?: BillingAddress.Latitude | undefined;
        /** The longitude for the billing address location. */
        longitude?: BillingAddress.Longitude | undefined;
        /** The name associated with an order's billing address. */
        name?: string | undefined;
        /** The phone number for the billing address. */
        phone?: string | undefined;
        /** The postal or zip code in the billing address. */
        postal_code?: string | undefined;
        /** The state or normalized province in the billing address. */
        province?: string | undefined;
        /** The two-letter code for the province or state in the billing address. */
        province_code?: string | undefined;
    }

    export namespace BillingAddress {
        /**
         * The latitude for the billing address location.
         */
        export type Latitude = number | string;
        /**
         * The longitude for the billing address location.
         */
        export type Longitude = number | string;
    }

    /**
     * A cart id that the order was placed for.
     */
    export type CartId = string | number;
    export type DiscountTotal = number | string;
    export type Lines = Lines.Item[];

    export namespace Lines {
        /**
         * Information about a specific order line.
         */
        export interface Item {
            discount?: Item.Discount | undefined;
            /** A unique identifier for the order line item. */
            id?: string | undefined;
            price?: Item.Price | undefined;
            /** A unique identifier for the product associated with the order line item. */
            product_id?: string | undefined;
            /** A unique identifier for the product variant associated with the order line item. */
            product_variant_id?: string | undefined;
            /** The quantity of an order line item. */
            quantity?: number | undefined;
        }

        export namespace Item {
            export type Discount = number | string;
            export type Price = number | string;
        }
    }

    export type OrderTotal = number | string;

    /**
     * The outreach associated with this order. For example, an email campaign or Facebook ad.
     */
    export interface Outreach {
        /** A unique identifier for the outreach. Can be an email campaign ID. */
        id?: string | undefined;
    }

    export type Promos = Promos.Item[];

    export namespace Promos {
        export interface Item {
            amount_discounted: Item.AmountDiscounted;
            /** The Promo Code */
            code: string;
            /** Type of discount. For free shipping set type to fixed */
            type: Item.Type;
        }

        export namespace Item {
            export type AmountDiscounted = number | string;
            /** Type of discount. For free shipping set type to fixed */
            export const Type = {
                Fixed: "fixed",
                Percentage: "percentage",
            } as const;
            export type Type = (typeof Type)[keyof typeof Type];
        }
    }

    /**
     * The shipping address for the order.
     */
    export interface ShippingAddress {
        /** The shipping address for the order. */
        address1?: string | undefined;
        /** An additional field for the shipping address. */
        address2?: string | undefined;
        /** The city in the order's shipping address. */
        city?: string | undefined;
        /** The company associated with an order's shipping address. */
        company?: string | undefined;
        /** The country in the order's shipping address. */
        country?: string | undefined;
        /** The two-letter code for the country in the shipping address. */
        country_code?: string | undefined;
        /** The latitude for the shipping address location. */
        latitude?: ShippingAddress.Latitude | undefined;
        /** The longitude for the shipping address location. */
        longitude?: ShippingAddress.Longitude | undefined;
        /** The name associated with an order's shipping address. */
        name?: string | undefined;
        /** The phone number for the order's shipping address */
        phone?: string | undefined;
        /** The postal or zip code in the order's shipping address. */
        postal_code?: string | undefined;
        /** The state or normalized province in the order's shipping address. */
        province?: string | undefined;
        /** The two-letter code for the province or state the order's shipping address is located in. */
        province_code?: string | undefined;
    }

    export namespace ShippingAddress {
        /**
         * The latitude for the shipping address location.
         */
        export type Latitude = number | string;
        /**
         * The longitude for the shipping address location.
         */
        export type Longitude = number | string;
    }

    export type ShippingTotal = number | string;
    export type TaxTotal = number | string;
    /** The Mailchimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs. */
    export const TrackingCode = {
        Prec: "prec",
    } as const;
    export type TrackingCode = (typeof TrackingCode)[keyof typeof TrackingCode];
}
