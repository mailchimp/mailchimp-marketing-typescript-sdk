//  This file was auto-generated from our API Definition.

/**
 * The store address.
 */
export interface ECommerceStoreAddress {
    /** The store's mailing address. */
    address1?: string;
    /** An additional field for the store's mailing address. */
    address2?: string;
    /** The city the store is located in. */
    city?: string;
    /** The store's country. */
    country?: string;
    /** The two-letter code for to the store's country. */
    countryCode?: string;
    /** The latitude of the store location. */
    latitude?: number;
    /** The longitude of the store location. */
    longitude?: number;
    /** The store's postal or zip code. */
    postalCode?: string;
    /** The store's state name or normalized province. */
    province?: string;
    /** The two-letter code for the store's province or state. */
    provinceCode?: string;
}
