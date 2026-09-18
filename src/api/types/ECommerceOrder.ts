//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about a specific order.
 */
export interface ECommerceOrder {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ECommerceOrderLinksItem[];
    /** The billing address for the order. */
    billingAddress?: Mailchimp.ECommerceOrderBillingAddress;
    /** A string that uniquely identifies the campaign associated with an order. */
    campaignId?: string;
    /** A cart id that the order was placed for. */
    cartId?: string;
    /** The date and time the order was cancelled in ISO 8601 format. */
    cancelledAtForeign?: Date;
    /** The three-letter ISO 4217 code for the currency that the store accepts. */
    currencyCode?: string;
    customer?: Mailchimp.ECommerceCustomer;
    /** The total amount of the discounts to be applied to the price of the order. */
    discountTotal?: number;
    /** The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications). */
    financialStatus?: string;
    /** The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications). */
    fulfillmentStatus?: string;
    /** A unique identifier for the order. */
    id?: string;
    /** The URL for the page where the buyer landed when entering the shop. */
    landingSite?: string;
    /** An array of the order's line items. */
    lines?: Mailchimp.ECommerceOrderLineItem[];
    orderTotal?: Mailchimp.ECommerceOrderOrderTotal;
    /** The URL for the order. */
    orderUrl?: string;
    /** The outreach associated with this order. For example, an email campaign or Facebook ad. */
    outreach?: Mailchimp.ECommerceOrderOutreach;
    /** The date and time the order was processed in ISO 8601 format. */
    processedAtForeign?: Date;
    /** The promo codes applied on the order */
    promos?: Mailchimp.ECommerceOrderPromosItem[];
    /** The shipping address for the order. */
    shippingAddress?: Mailchimp.ECommerceOrderShippingAddress;
    shippingTotal?: Mailchimp.ECommerceOrderShippingTotal;
    /** The unique identifier for the store. */
    storeId?: string;
    taxTotal?: Mailchimp.ECommerceOrderTaxTotal;
    /** The tracking carrier associated with the order. */
    trackingCarrier?: string;
    /** The Mailchimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs. */
    trackingCode?: Mailchimp.ECommerceOrderTrackingCode;
    /** The tracking number associated with the order. */
    trackingNumber?: string;
    /** The tracking URL associated with the order. */
    trackingUrl?: string;
    /** The date and time the order was updated in ISO 8601 format. */
    updatedAtForeign?: Date;
}
