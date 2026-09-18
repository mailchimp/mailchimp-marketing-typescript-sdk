//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const UpdateStorePromoRulePromoCodeEcommerceRequest: core.serialization.Schema<
    serializers.UpdateStorePromoRulePromoCodeEcommerceRequest.Raw,
    Omit<Mailchimp.UpdateStorePromoRulePromoCodeEcommerceRequest, "storeId" | "promoRuleId" | "promoCodeId">
> = core.serialization.object({
    code: core.serialization.string().optional(),
    createdAtForeign: core.serialization.property("created_at_foreign", core.serialization.string().optional()),
    enabled: core.serialization.boolean().optional(),
    id: core.serialization.string().optional(),
    redemptionUrl: core.serialization.property("redemption_url", core.serialization.string().optional()),
    updatedAtForeign: core.serialization.property("updated_at_foreign", core.serialization.string().optional()),
    usageCount: core.serialization.property("usage_count", core.serialization.number().optional()),
});

export declare namespace UpdateStorePromoRulePromoCodeEcommerceRequest {
    export interface Raw {
        code?: string | null;
        created_at_foreign?: string | null;
        enabled?: boolean | null;
        id?: string | null;
        redemption_url?: string | null;
        updated_at_foreign?: string | null;
        usage_count?: number | null;
    }
}
