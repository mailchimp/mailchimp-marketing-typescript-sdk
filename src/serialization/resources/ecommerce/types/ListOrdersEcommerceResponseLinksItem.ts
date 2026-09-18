//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListOrdersEcommerceResponseLinksItemMethod } from "./ListOrdersEcommerceResponseLinksItemMethod.js";

export const ListOrdersEcommerceResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListOrdersEcommerceResponseLinksItem.Raw,
    Mailchimp.ListOrdersEcommerceResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListOrdersEcommerceResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListOrdersEcommerceResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListOrdersEcommerceResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
