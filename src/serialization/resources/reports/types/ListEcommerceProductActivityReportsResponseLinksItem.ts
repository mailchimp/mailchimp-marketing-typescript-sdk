//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListEcommerceProductActivityReportsResponseLinksItemMethod } from "./ListEcommerceProductActivityReportsResponseLinksItemMethod.js";

export const ListEcommerceProductActivityReportsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListEcommerceProductActivityReportsResponseLinksItem.Raw,
    Mailchimp.ListEcommerceProductActivityReportsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListEcommerceProductActivityReportsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListEcommerceProductActivityReportsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListEcommerceProductActivityReportsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
