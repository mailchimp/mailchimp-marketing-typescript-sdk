//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The API root resource links to all other resources available in the API.
 */
export interface ListRootResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListRootResponseLinksItem[];
    /** The Mailchimp account ID. */
    accountId?: string;
    /** The user-specified industry associated with the account. */
    accountIndustry?: string;
    /** The name of the account. */
    accountName?: string;
    /** The timezone currently set for the account. */
    accountTimezone?: string;
    /** URL of the avatar for the user. */
    avatarUrl?: string;
    /** Information about the account contact. */
    contact?: Mailchimp.ListRootResponseContact;
    /** The account email address. */
    email?: string;
    /** The first name tied to the account. */
    firstName?: string;
    /** Date of first payment for monthly plans. */
    firstPayment?: Mailchimp.ListRootResponseFirstPayment;
    /** The [average campaign statistics](https://mailchimp.com/resources/research/email-marketing-benchmarks/?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs) for all campaigns in the account's specified industry. */
    industryStats?: Mailchimp.ListRootResponseIndustryStats;
    /** The date and time of the last login for this account in ISO 8601 format. */
    lastLogin?: Date;
    /** The last name tied to the account. */
    lastName?: string;
    /** The ID associated with the user who owns this API key. If you can login to multiple accounts, this ID will be the same for each account. */
    loginId?: string;
    /** The date and time that the account was created in ISO 8601 format. */
    memberSince?: Date;
    /** The type of pricing plan the account is on. */
    pricingPlanType?: Mailchimp.ListRootResponsePricingPlanType;
    /** Legacy - whether the account includes [Mailchimp Pro](https://mailchimp.com/help/about-legacy-pricing-plan/). */
    proEnabled?: boolean;
    /** The [user role](https://mailchimp.com/help/manage-user-levels-in-your-account/) for the account. */
    role?: string;
    /** The total number of subscribers across all lists in the account. */
    totalSubscribers?: number;
    /** The username tied to the account. */
    username?: string;
}
