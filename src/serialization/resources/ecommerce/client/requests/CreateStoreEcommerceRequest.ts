//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateStoreEcommerceRequestAddress } from "../../types/CreateStoreEcommerceRequestAddress.js";

export const CreateStoreEcommerceRequest: core.serialization.Schema<
    serializers.CreateStoreEcommerceRequest.Raw,
    Mailchimp.CreateStoreEcommerceRequest
> = core.serialization.object({
    address: CreateStoreEcommerceRequestAddress.optional(),
    currencyCode: core.serialization.property("currency_code", core.serialization.string()),
    domain: core.serialization.string().optional(),
    emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
    id: core.serialization.string(),
    isSyncing: core.serialization.property("is_syncing", core.serialization.boolean().optional()),
    listId: core.serialization.property("list_id", core.serialization.string()),
    moneyFormat: core.serialization.property("money_format", core.serialization.string().optional()),
    name: core.serialization.string(),
    phone: core.serialization.string().optional(),
    platform: core.serialization.string().optional(),
    primaryLocale: core.serialization.property("primary_locale", core.serialization.string().optional()),
    timezone: core.serialization.string().optional(),
});

export declare namespace CreateStoreEcommerceRequest {
    export interface Raw {
        address?: CreateStoreEcommerceRequestAddress.Raw | null;
        currency_code: string;
        domain?: string | null;
        email_address?: string | null;
        id: string;
        is_syncing?: boolean | null;
        list_id: string;
        money_format?: string | null;
        name: string;
        phone?: string | null;
        platform?: string | null;
        primary_locale?: string | null;
        timezone?: string | null;
    }
}
