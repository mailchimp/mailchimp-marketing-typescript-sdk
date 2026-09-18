//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListStorePromoRulesEcommerceResponseLinksItemMethod } from "./ListStorePromoRulesEcommerceResponseLinksItemMethod.js";

export const ListStorePromoRulesEcommerceResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListStorePromoRulesEcommerceResponseLinksItem.Raw,
    Mailchimp.ListStorePromoRulesEcommerceResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListStorePromoRulesEcommerceResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListStorePromoRulesEcommerceResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListStorePromoRulesEcommerceResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
