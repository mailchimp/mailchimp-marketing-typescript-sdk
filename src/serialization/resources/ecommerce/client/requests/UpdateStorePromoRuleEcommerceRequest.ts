//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpdateStorePromoRuleEcommerceRequestAmount } from "../../types/UpdateStorePromoRuleEcommerceRequestAmount.js";
import { UpdateStorePromoRuleEcommerceRequestEndsAt } from "../../types/UpdateStorePromoRuleEcommerceRequestEndsAt.js";
import { UpdateStorePromoRuleEcommerceRequestStartsAt } from "../../types/UpdateStorePromoRuleEcommerceRequestStartsAt.js";
import { UpdateStorePromoRuleEcommerceRequestTarget } from "../../types/UpdateStorePromoRuleEcommerceRequestTarget.js";
import { UpdateStorePromoRuleEcommerceRequestType } from "../../types/UpdateStorePromoRuleEcommerceRequestType.js";

export const UpdateStorePromoRuleEcommerceRequest: core.serialization.Schema<
    serializers.UpdateStorePromoRuleEcommerceRequest.Raw,
    Omit<Mailchimp.UpdateStorePromoRuleEcommerceRequest, "storeId" | "promoRuleId">
> = core.serialization.object({
    amount: UpdateStorePromoRuleEcommerceRequestAmount.optional(),
    createdAtForeign: core.serialization.property("created_at_foreign", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
    enabled: core.serialization.boolean().optional(),
    endsAt: core.serialization.property("ends_at", UpdateStorePromoRuleEcommerceRequestEndsAt.optional()),
    id: core.serialization.string().optional(),
    startsAt: core.serialization.property("starts_at", UpdateStorePromoRuleEcommerceRequestStartsAt.optional()),
    target: UpdateStorePromoRuleEcommerceRequestTarget.optional(),
    title: core.serialization.string().optional(),
    type: UpdateStorePromoRuleEcommerceRequestType.optional(),
    updatedAtForeign: core.serialization.property("updated_at_foreign", core.serialization.string().optional()),
});

export declare namespace UpdateStorePromoRuleEcommerceRequest {
    export interface Raw {
        amount?: UpdateStorePromoRuleEcommerceRequestAmount.Raw | null;
        created_at_foreign?: string | null;
        description?: string | null;
        enabled?: boolean | null;
        ends_at?: UpdateStorePromoRuleEcommerceRequestEndsAt.Raw | null;
        id?: string | null;
        starts_at?: UpdateStorePromoRuleEcommerceRequestStartsAt.Raw | null;
        target?: UpdateStorePromoRuleEcommerceRequestTarget.Raw | null;
        title?: string | null;
        type?: UpdateStorePromoRuleEcommerceRequestType.Raw | null;
        updated_at_foreign?: string | null;
    }
}
