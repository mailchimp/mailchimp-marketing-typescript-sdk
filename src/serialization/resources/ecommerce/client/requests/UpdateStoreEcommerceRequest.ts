//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpdateStoreEcommerceRequestAddress } from "../../types/UpdateStoreEcommerceRequestAddress.js";

export const UpdateStoreEcommerceRequest: core.serialization.Schema<
    serializers.UpdateStoreEcommerceRequest.Raw,
    Omit<Mailchimp.UpdateStoreEcommerceRequest, "storeId">
> = core.serialization.object({
    address: UpdateStoreEcommerceRequestAddress.optional(),
    currencyCode: core.serialization.property("currency_code", core.serialization.string().optional()),
    domain: core.serialization.string().optional(),
    emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
    isSyncing: core.serialization.property("is_syncing", core.serialization.boolean().optional()),
    moneyFormat: core.serialization.property("money_format", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    phone: core.serialization.string().optional(),
    platform: core.serialization.string().optional(),
    primaryLocale: core.serialization.property("primary_locale", core.serialization.string().optional()),
    timezone: core.serialization.string().optional(),
});

export declare namespace UpdateStoreEcommerceRequest {
    export interface Raw {
        address?: UpdateStoreEcommerceRequestAddress.Raw | null;
        currency_code?: string | null;
        domain?: string | null;
        email_address?: string | null;
        is_syncing?: boolean | null;
        money_format?: string | null;
        name?: string | null;
        phone?: string | null;
        platform?: string | null;
        primary_locale?: string | null;
        timezone?: string | null;
    }
}
