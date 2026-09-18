//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceCartLinksItemMethod } from "./ECommerceCartLinksItemMethod.js";

export const ECommerceCartLinksItem: core.serialization.ObjectSchema<
    serializers.ECommerceCartLinksItem.Raw,
    Mailchimp.ECommerceCartLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ECommerceCartLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ECommerceCartLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ECommerceCartLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
