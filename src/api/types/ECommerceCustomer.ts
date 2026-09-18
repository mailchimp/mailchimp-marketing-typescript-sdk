//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about a specific customer.
 */
export interface ECommerceCustomer {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ECommerceCustomerLinksItem[];
    /** The customer's address. */
    address?: Mailchimp.ECommerceCustomerAddress;
    /** The customer's company. */
    company?: string;
    /** The date and time the customer was created in ISO 8601 format. */
    createdAt?: Date;
    /** The customer's email address. */
    emailAddress?: string;
    /** The customer's first name. */
    firstName?: string;
    /** A unique identifier for the customer. */
    id?: string;
    /** The customer's last name. */
    lastName?: string;
    /** The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers). */
    optInStatus?: boolean;
    /** The customer's total order count. */
    ordersCount?: number;
    /** A US phone number for SMS contact. */
    smsPhoneNumber?: string;
    totalSpent?: Mailchimp.ECommerceCustomerTotalSpent;
    /** The date and time the customer was last updated in ISO 8601 format. */
    updatedAt?: Date;
}
