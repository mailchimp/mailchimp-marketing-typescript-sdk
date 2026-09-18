//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListEcommerceResponseLinksItemMethod } from "./ListEcommerceResponseLinksItemMethod.js";

export const ListEcommerceResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListEcommerceResponseLinksItem.Raw,
    Mailchimp.ListEcommerceResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListEcommerceResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListEcommerceResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListEcommerceResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
