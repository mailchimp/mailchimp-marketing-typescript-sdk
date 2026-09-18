//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceOrderLinksItemMethod } from "./ECommerceOrderLinksItemMethod.js";

export const ECommerceOrderLinksItem: core.serialization.ObjectSchema<
    serializers.ECommerceOrderLinksItem.Raw,
    Mailchimp.ECommerceOrderLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ECommerceOrderLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ECommerceOrderLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ECommerceOrderLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
