//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceProductLinksItemMethod } from "./ECommerceProductLinksItemMethod.js";

export const ECommerceProductLinksItem: core.serialization.ObjectSchema<
    serializers.ECommerceProductLinksItem.Raw,
    Mailchimp.ECommerceProductLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ECommerceProductLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ECommerceProductLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ECommerceProductLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
