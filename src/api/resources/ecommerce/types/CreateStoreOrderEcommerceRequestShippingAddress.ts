//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The shipping address for the order.
 */
export interface CreateStoreOrderEcommerceRequestShippingAddress {
    /** The shipping address for the order. */
    address1?: string;
    /** An additional field for the shipping address. */
    address2?: string;
    /** The city in the order's shipping address. */
    city?: string;
    /** The company associated with the shipping address. */
    company?: string;
    /** The country in the shipping address. */
    country?: string;
    /** The two-letter code for the country in the shipping address. */
    countryCode?: string;
    /** The latitude for the shipping address location. */
    latitude?: Mailchimp.CreateStoreOrderEcommerceRequestShippingAddressLatitude;
    /** The longitude for the shipping address location. */
    longitude?: Mailchimp.CreateStoreOrderEcommerceRequestShippingAddressLongitude;
    /** The name associated with an order's shipping address. */
    name?: string;
    /** The phone number for the order's shipping address. */
    phone?: string;
    /** The postal or zip code in the shipping address. */
    postalCode?: string;
    /** The state or normalized province in the order's shipping address. */
    province?: string;
    /** The two-letter code for the province or state in the shipping address. */
    provinceCode?: string;
}
