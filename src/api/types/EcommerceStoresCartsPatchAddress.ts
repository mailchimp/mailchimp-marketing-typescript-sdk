//  This file was auto-generated from our API Definition.

/**
 * The customer's address.
 */
export interface EcommerceStoresCartsPatchAddress {
    /** The mailing address of the customer. */
    address1?: string;
    /** An additional field for the customer's mailing address. */
    address2?: string;
    /** The city the customer is located in. */
    city?: string;
    /** The customer's country. */
    country?: string;
    /** The two-letter code for the customer's country. */
    countryCode?: string;
    /** The customer's postal or zip code. */
    postalCode?: string;
    /** The customer's state name or normalized province. */
    province?: string;
    /** The two-letter code for the customer's province or state. */
    provinceCode?: string;
}
