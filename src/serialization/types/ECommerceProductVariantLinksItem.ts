//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceProductVariantLinksItemMethod } from "./ECommerceProductVariantLinksItemMethod.js";

export const ECommerceProductVariantLinksItem: core.serialization.ObjectSchema<
    serializers.ECommerceProductVariantLinksItem.Raw,
    Mailchimp.ECommerceProductVariantLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ECommerceProductVariantLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ECommerceProductVariantLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ECommerceProductVariantLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
