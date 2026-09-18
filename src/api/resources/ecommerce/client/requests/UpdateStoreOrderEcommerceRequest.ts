//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         orderId: "order_id"
 *     }
 */
export interface UpdateStoreOrderEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** The id for the order in a store. */
    orderId: string;
    /** The billing address for the order. */
    billingAddress?: Mailchimp.UpdateStoreOrderEcommerceRequestBillingAddress;
    /** A string that uniquely identifies the campaign associated with an order. */
    campaignId?: string;
    /** A cart id that the order was placed for. */
    cartId?: Mailchimp.UpdateStoreOrderEcommerceRequestCartId;
    /** The date and time the order was cancelled in ISO 8601 format. Note: passing a value for this parameter will cancel the order being edited. */
    cancelledAtForeign?: string;
    /** The three-letter ISO 4217 code for the currency that the store accepts. */
    currencyCode?: string;
    customer?: Mailchimp.EcommerceStoresCartsPatch;
    discountTotal?: Mailchimp.UpdateStoreOrderEcommerceRequestDiscountTotal;
    /** The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications). */
    financialStatus?: string;
    /** The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications). */
    fulfillmentStatus?: string;
    /** A unique identifier for the order. */
    id?: string;
    /** The URL for the page where the buyer landed when entering the shop. */
    landingSite?: string;
    /** An array of the order's line items. */
    lines?: Mailchimp.UpdateStoreOrderEcommerceRequestLinesItem[];
    orderTotal?: Mailchimp.UpdateStoreOrderEcommerceRequestOrderTotal;
    /** The URL for the order. */
    orderUrl?: string;
    /** The outreach associated with this order. For example, an email campaign or Facebook ad. */
    outreach?: Mailchimp.UpdateStoreOrderEcommerceRequestOutreach;
    /** The date and time the order was processed in ISO 8601 format. */
    processedAtForeign?: string;
    /** The promo codes applied on the order. Note: Patch will completely replace the value of promos with the new one provided. */
    promos?: Mailchimp.UpdateStoreOrderEcommerceRequestPromosItem[];
    /** The shipping address for the order. */
    shippingAddress?: Mailchimp.UpdateStoreOrderEcommerceRequestShippingAddress;
    shippingTotal?: Mailchimp.UpdateStoreOrderEcommerceRequestShippingTotal;
    taxTotal?: Mailchimp.UpdateStoreOrderEcommerceRequestTaxTotal;
    /** The tracking carrier associated with the order. */
    trackingCarrier?: string;
    /** The Mailchimp tracking code for the order. Uses the 'mc_tc' parameter in E-Commerce tracking URLs. */
    trackingCode?: Mailchimp.UpdateStoreOrderEcommerceRequestTrackingCode;
    /** The tracking number associated with the order. */
    trackingNumber?: string;
    /** The tracking URL associated with the order. */
    trackingUrl?: string;
    /** The date and time the order was updated in ISO 8601 format. */
    updatedAtForeign?: string;
}
