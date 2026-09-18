//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateStorePromoRuleEcommerceRequestAmount } from "../../types/CreateStorePromoRuleEcommerceRequestAmount.js";
import { CreateStorePromoRuleEcommerceRequestEndsAt } from "../../types/CreateStorePromoRuleEcommerceRequestEndsAt.js";
import { CreateStorePromoRuleEcommerceRequestStartsAt } from "../../types/CreateStorePromoRuleEcommerceRequestStartsAt.js";
import { CreateStorePromoRuleEcommerceRequestTarget } from "../../types/CreateStorePromoRuleEcommerceRequestTarget.js";
import { CreateStorePromoRuleEcommerceRequestType } from "../../types/CreateStorePromoRuleEcommerceRequestType.js";

export const CreateStorePromoRuleEcommerceRequest: core.serialization.Schema<
    serializers.CreateStorePromoRuleEcommerceRequest.Raw,
    Omit<Mailchimp.CreateStorePromoRuleEcommerceRequest, "storeId">
> = core.serialization.object({
    amount: CreateStorePromoRuleEcommerceRequestAmount,
    createdAtForeign: core.serialization.property("created_at_foreign", core.serialization.string().optional()),
    description: core.serialization.string(),
    enabled: core.serialization.boolean().optional(),
    endsAt: core.serialization.property("ends_at", CreateStorePromoRuleEcommerceRequestEndsAt.optional()),
    id: core.serialization.string(),
    startsAt: core.serialization.property("starts_at", CreateStorePromoRuleEcommerceRequestStartsAt.optional()),
    target: CreateStorePromoRuleEcommerceRequestTarget,
    title: core.serialization.string().optional(),
    type: CreateStorePromoRuleEcommerceRequestType,
    updatedAtForeign: core.serialization.property("updated_at_foreign", core.serialization.string().optional()),
});

export declare namespace CreateStorePromoRuleEcommerceRequest {
    export interface Raw {
        amount: CreateStorePromoRuleEcommerceRequestAmount.Raw;
        created_at_foreign?: string | null;
        description: string;
        enabled?: boolean | null;
        ends_at?: CreateStorePromoRuleEcommerceRequestEndsAt.Raw | null;
        id: string;
        starts_at?: CreateStorePromoRuleEcommerceRequestStartsAt.Raw | null;
        target: CreateStorePromoRuleEcommerceRequestTarget.Raw;
        title?: string | null;
        type: CreateStorePromoRuleEcommerceRequestType.Raw;
        updated_at_foreign?: string | null;
    }
}
