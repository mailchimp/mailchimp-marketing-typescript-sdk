//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceCustomerLinksItemMethod } from "./ECommerceCustomerLinksItemMethod.js";

export const ECommerceCustomerLinksItem: core.serialization.ObjectSchema<
    serializers.ECommerceCustomerLinksItem.Raw,
    Mailchimp.ECommerceCustomerLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ECommerceCustomerLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ECommerceCustomerLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ECommerceCustomerLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
