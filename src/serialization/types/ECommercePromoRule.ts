//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommercePromoRuleLinksItem } from "./ECommercePromoRuleLinksItem.js";
import { ECommercePromoRuleTarget } from "./ECommercePromoRuleTarget.js";
import { ECommercePromoRuleType } from "./ECommercePromoRuleType.js";

export const ECommercePromoRule: core.serialization.ObjectSchema<
    serializers.ECommercePromoRule.Raw,
    Mailchimp.ECommercePromoRule
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ECommercePromoRuleLinksItem).optional()),
    amount: core.serialization.number().optional(),
    createdAtForeign: core.serialization.property("created_at_foreign", core.serialization.date().optional()),
    description: core.serialization.string().optional(),
    enabled: core.serialization.boolean().optional(),
    endsAt: core.serialization.property("ends_at", core.serialization.string().optional()),
    id: core.serialization.string().optional(),
    startsAt: core.serialization.property("starts_at", core.serialization.date().optional()),
    target: ECommercePromoRuleTarget.optional(),
    title: core.serialization.string().optional(),
    type: ECommercePromoRuleType.optional(),
    updatedAtForeign: core.serialization.property("updated_at_foreign", core.serialization.date().optional()),
});

export declare namespace ECommercePromoRule {
    export interface Raw {
        _links?: ECommercePromoRuleLinksItem.Raw[] | null;
        amount?: number | null;
        created_at_foreign?: string | null;
        description?: string | null;
        enabled?: boolean | null;
        ends_at?: string | null;
        id?: string | null;
        starts_at?: string | null;
        target?: ECommercePromoRuleTarget.Raw | null;
        title?: string | null;
        type?: ECommercePromoRuleType.Raw | null;
        updated_at_foreign?: string | null;
    }
}
