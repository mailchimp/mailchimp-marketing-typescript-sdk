//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateStorePromoRulePromoCodeEcommerceRequest: core.serialization.Schema<
    serializers.CreateStorePromoRulePromoCodeEcommerceRequest.Raw,
    Omit<Mailchimp.CreateStorePromoRulePromoCodeEcommerceRequest, "storeId" | "promoRuleId">
> = core.serialization.object({
    code: core.serialization.string(),
    createdAtForeign: core.serialization.property("created_at_foreign", core.serialization.string().optional()),
    enabled: core.serialization.boolean().optional(),
    id: core.serialization.string(),
    redemptionUrl: core.serialization.property("redemption_url", core.serialization.string()),
    updatedAtForeign: core.serialization.property("updated_at_foreign", core.serialization.string().optional()),
    usageCount: core.serialization.property("usage_count", core.serialization.number().optional()),
});

export declare namespace CreateStorePromoRulePromoCodeEcommerceRequest {
    export interface Raw {
        code: string;
        created_at_foreign?: string | null;
        enabled?: boolean | null;
        id: string;
        redemption_url: string;
        updated_at_foreign?: string | null;
        usage_count?: number | null;
    }
}
