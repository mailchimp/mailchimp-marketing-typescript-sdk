//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceStoreLinksItemMethod } from "./ECommerceStoreLinksItemMethod.js";

export const ECommerceStoreLinksItem: core.serialization.ObjectSchema<
    serializers.ECommerceStoreLinksItem.Raw,
    Mailchimp.ECommerceStoreLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ECommerceStoreLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ECommerceStoreLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ECommerceStoreLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
