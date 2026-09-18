//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceCartLineItemLinksItemMethod } from "./ECommerceCartLineItemLinksItemMethod.js";

export const ECommerceCartLineItemLinksItem: core.serialization.ObjectSchema<
    serializers.ECommerceCartLineItemLinksItem.Raw,
    Mailchimp.ECommerceCartLineItemLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ECommerceCartLineItemLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ECommerceCartLineItemLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ECommerceCartLineItemLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
