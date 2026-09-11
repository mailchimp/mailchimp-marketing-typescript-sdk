//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         store_id: "store_id",
 *         id: "id",
 *         opt_in_status: true
 *     }
 */
export interface CreateStoreCustomerEcommerceRequest {
    /** The store id. */
    store_id: string;
    /** The customer's address. */
    address?: CreateStoreCustomerEcommerceRequest.Address;
    /** The customer's company. */
    company?: string;
    /** The customer's email address. */
    email_address?: string;
    /** The customer's first name. */
    first_name?: string;
    /** A unique identifier for the customer. Limited to 50 characters. */
    id: string;
    /** The customer's last name. */
    last_name?: string;
    /** The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers). */
    opt_in_status: boolean;
    /** A US phone number for SMS contact. */
    sms_phone_number?: string;
    total_spent?: CreateStoreCustomerEcommerceRequest.TotalSpent;
}

export namespace CreateStoreCustomerEcommerceRequest {
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

    export type TotalSpent = number | string;
}
