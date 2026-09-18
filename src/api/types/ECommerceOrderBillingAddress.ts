//  This file was auto-generated from our API Definition.

/**
 * The billing address for the order.
 */
export interface ECommerceOrderBillingAddress {
    /** The billing address for the order. */
    address1?: string;
    /** An additional field for the billing address. */
    address2?: string;
    /** The city in the billing address. */
    city?: string;
    /** The company associated with the billing address. */
    company?: string;
    /** The country in the billing address. */
    country?: string;
    /** The two-letter code for the country in the billing address. */
    countryCode?: string;
    /** The latitude for the billing address location. */
    latitude?: number;
    /** The longitude for the billing address location. */
    longitude?: number;
    /** The name associated with an order's billing address. */
    name?: string;
    /** The phone number for the billing address. */
    phone?: string;
    /** The postal or zip code in the billing address. */
    postalCode?: string;
    /** The state or normalized province in the billing address. */
    province?: string;
    /** The two-letter code for the province or state in the billing address. */
    provinceCode?: string;
}
