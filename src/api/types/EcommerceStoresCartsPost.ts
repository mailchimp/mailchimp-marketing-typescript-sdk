//  This file was auto-generated from our API Definition.

/**
 * Information about a specific customer. For existing customers include only the `id` parameter in the `customer` object body.
 */
export interface EcommerceStoresCartsPost {
    /** The customer's address. */
    address?: EcommerceStoresCartsPost.Address | undefined;
    /** The customer's company. */
    company?: string | undefined;
    /** The customer's email address. */
    email_address?: string | undefined;
    /** The customer's first name. */
    first_name?: string | undefined;
    /** A unique identifier for the customer. Limited to 50 characters. */
    id: string;
    /** The customer's last name. */
    last_name?: string | undefined;
    /** The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers). */
    opt_in_status?: boolean | undefined;
}

export namespace EcommerceStoresCartsPost {
    /**
     * The customer's address.
     */
    export interface Address {
        /** The mailing address of the customer. */
        address1?: string | undefined;
        /** An additional field for the customer's mailing address. */
        address2?: string | undefined;
        /** The city the customer is located in. */
        city?: string | undefined;
        /** The customer's country. */
        country?: string | undefined;
        /** The two-letter code for the customer's country. */
        country_code?: string | undefined;
        /** The customer's postal or zip code. */
        postal_code?: string | undefined;
        /** The customer's state name or normalized province. */
        province?: string | undefined;
        /** The two-letter code for the customer's province or state. */
        province_code?: string | undefined;
    }
}
