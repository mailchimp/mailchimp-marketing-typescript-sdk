//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommercePromoRuleLinksItemMethod } from "./ECommercePromoRuleLinksItemMethod.js";

export const ECommercePromoRuleLinksItem: core.serialization.ObjectSchema<
    serializers.ECommercePromoRuleLinksItem.Raw,
    Mailchimp.ECommercePromoRuleLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ECommercePromoRuleLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ECommercePromoRuleLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ECommercePromoRuleLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
