//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceOrderLineItemLinksItemMethod } from "./ECommerceOrderLineItemLinksItemMethod.js";

export const ECommerceOrderLineItemLinksItem: core.serialization.ObjectSchema<
    serializers.ECommerceOrderLineItemLinksItem.Raw,
    Mailchimp.ECommerceOrderLineItemLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ECommerceOrderLineItemLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ECommerceOrderLineItemLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ECommerceOrderLineItemLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
