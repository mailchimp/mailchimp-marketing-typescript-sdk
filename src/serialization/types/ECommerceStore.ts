//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceStoreAddress } from "./ECommerceStoreAddress.js";
import { ECommerceStoreAutomations } from "./ECommerceStoreAutomations.js";
import { ECommerceStoreConnectedSite } from "./ECommerceStoreConnectedSite.js";
import { ECommerceStoreLinksItem } from "./ECommerceStoreLinksItem.js";

export const ECommerceStore: core.serialization.ObjectSchema<serializers.ECommerceStore.Raw, Mailchimp.ECommerceStore> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(ECommerceStoreLinksItem).optional()),
        address: ECommerceStoreAddress.optional(),
        automations: ECommerceStoreAutomations.optional(),
        connectedSite: core.serialization.property("connected_site", ECommerceStoreConnectedSite.optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        currencyCode: core.serialization.property("currency_code", core.serialization.string().optional()),
        domain: core.serialization.string().optional(),
        emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
        id: core.serialization.string().optional(),
        isSyncing: core.serialization.property("is_syncing", core.serialization.boolean().optional()),
        listId: core.serialization.property("list_id", core.serialization.string().optional()),
        listIsActive: core.serialization.property("list_is_active", core.serialization.boolean().optional()),
        moneyFormat: core.serialization.property("money_format", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        phone: core.serialization.string().optional(),
        platform: core.serialization.string().optional(),
        primaryLocale: core.serialization.property("primary_locale", core.serialization.string().optional()),
        timezone: core.serialization.string().optional(),
        updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
    });

export declare namespace ECommerceStore {
    export interface Raw {
        _links?: ECommerceStoreLinksItem.Raw[] | null;
        address?: ECommerceStoreAddress.Raw | null;
        automations?: ECommerceStoreAutomations.Raw | null;
        connected_site?: ECommerceStoreConnectedSite.Raw | null;
        created_at?: string | null;
        currency_code?: string | null;
        domain?: string | null;
        email_address?: string | null;
        id?: string | null;
        is_syncing?: boolean | null;
        list_id?: string | null;
        list_is_active?: boolean | null;
        money_format?: string | null;
        name?: string | null;
        phone?: string | null;
        platform?: string | null;
        primary_locale?: string | null;
        timezone?: string | null;
        updated_at?: string | null;
    }
}
