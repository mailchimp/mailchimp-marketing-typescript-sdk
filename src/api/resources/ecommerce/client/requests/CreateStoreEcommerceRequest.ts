//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         currencyCode: "USD",
 *         id: "example_store",
 *         listId: "1a2df69511",
 *         name: "Freddie's Cat Hat Emporium"
 *     }
 */
export interface CreateStoreEcommerceRequest {
    /** The store address. */
    address?: Mailchimp.CreateStoreEcommerceRequestAddress;
    /** The three-letter ISO 4217 code for the currency that the store accepts. */
    currencyCode: string;
    /** The store domain. This parameter is required for Connected Sites and Google Ads. */
    domain?: string;
    /** The email address for the store. */
    emailAddress?: string;
    /** The unique identifier for the store. */
    id: string;
    /** Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations). */
    isSyncing?: boolean;
    /** The unique identifier for the list associated with the store. The `list_id` for a specific store cannot change. */
    listId: string;
    /** The currency format for the store. For example: `$`, `£`, etc. */
    moneyFormat?: string;
    /** The name of the store. */
    name: string;
    /** The store phone number. */
    phone?: string;
    /** The e-commerce platform of the store. */
    platform?: string;
    /** The primary locale for the store. For example: `en`, `de`, etc. */
    primaryLocale?: string;
    /** The timezone for the store. */
    timezone?: string;
}
