//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         storeId: "store_id",
 *         id: "id",
 *         optInStatus: true
 *     }
 */
export interface CreateStoreCustomerEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** The customer's address. */
    address?: Mailchimp.CreateStoreCustomerEcommerceRequestAddress;
    /** The customer's company. */
    company?: string;
    /** The customer's email address. */
    emailAddress?: string;
    /** The customer's first name. */
    firstName?: string;
    /** A unique identifier for the customer. Limited to 50 characters. */
    id: string;
    /** The customer's last name. */
    lastName?: string;
    /** The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers). */
    optInStatus: boolean;
    /** A US phone number for SMS contact. */
    smsPhoneNumber?: string;
    totalSpent?: Mailchimp.CreateStoreCustomerEcommerceRequestTotalSpent;
}
