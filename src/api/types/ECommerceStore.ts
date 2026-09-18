//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * An individual store in an account.
 */
export interface ECommerceStore {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ECommerceStoreLinksItem[];
    /** The store address. */
    address?: Mailchimp.ECommerceStoreAddress;
    /** Details for the automations attached to this store. */
    automations?: Mailchimp.ECommerceStoreAutomations;
    /** The Connected Site associated with the store. */
    connectedSite?: Mailchimp.ECommerceStoreConnectedSite;
    /** The date and time the store was created in ISO 8601 format. */
    createdAt?: Date;
    /** The three-letter ISO 4217 code for the currency that the store accepts. */
    currencyCode?: string;
    /** The store domain.  The store domain must be unique within a user account. */
    domain?: string;
    /** The email address for the store. */
    emailAddress?: string;
    /** The unique identifier for the store. */
    id?: string;
    /** Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations). */
    isSyncing?: boolean;
    /** The unique identifier for the list that's associated with the store. The `list_id` for a specific store can't change. */
    listId?: string;
    /** The status of the list connected to the store, namely if it's deleted or disabled. */
    listIsActive?: boolean;
    /** The currency format for the store. For example: `$`, `£`, etc. */
    moneyFormat?: string;
    /** The name of the store. */
    name?: string;
    /** The store phone number. */
    phone?: string;
    /** The e-commerce platform of the store. */
    platform?: string;
    /** The primary locale for the store. For example: `en`, `de`, etc. */
    primaryLocale?: string;
    /** The timezone for the store. */
    timezone?: string;
    /** The date and time the store was last updated in ISO 8601 format. */
    updatedAt?: Date;
}
