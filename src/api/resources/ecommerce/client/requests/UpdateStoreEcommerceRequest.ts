//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         storeId: "store_id"
 *     }
 */
export interface UpdateStoreEcommerceRequest {
    /** The store id. */
    storeId: string;
    /** The store address. */
    address?: Mailchimp.UpdateStoreEcommerceRequestAddress;
    /** The three-letter ISO 4217 code for the currency that the store accepts. */
    currencyCode?: string;
    /** The store domain. */
    domain?: string;
    /** The email address for the store. */
    emailAddress?: string;
    /** Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations). */
    isSyncing?: boolean;
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
}
