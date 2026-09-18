//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListStoreCustomersEcommerceResponseLinksItemMethod } from "./ListStoreCustomersEcommerceResponseLinksItemMethod.js";

export const ListStoreCustomersEcommerceResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListStoreCustomersEcommerceResponseLinksItem.Raw,
    Mailchimp.ListStoreCustomersEcommerceResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListStoreCustomersEcommerceResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListStoreCustomersEcommerceResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListStoreCustomersEcommerceResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
