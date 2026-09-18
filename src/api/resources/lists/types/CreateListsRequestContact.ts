//  This file was auto-generated from our API Definition.

/**
 * [Contact information displayed in campaign footers](https://mailchimp.com/help/about-campaign-footers/) to comply with international spam laws.
 */
export interface CreateListsRequestContact {
    /** The street address for the list contact. */
    address1: string;
    /** The street address for the list contact. */
    address2?: string;
    /** The city for the list contact. */
    city: string;
    /** The company name for the list. */
    company: string;
    /** A two-character ISO3166 country code. Defaults to US if invalid. */
    country: string;
    /** The phone number for the list contact. */
    phone?: string;
    /** The state for the list contact. */
    state?: string;
    /** The postal or zip code for the list contact. */
    zip?: string;
}
