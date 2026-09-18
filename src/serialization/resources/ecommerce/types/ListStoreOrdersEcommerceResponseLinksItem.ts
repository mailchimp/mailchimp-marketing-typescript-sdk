//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListStoreOrdersEcommerceResponseLinksItemMethod } from "./ListStoreOrdersEcommerceResponseLinksItemMethod.js";

export const ListStoreOrdersEcommerceResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListStoreOrdersEcommerceResponseLinksItem.Raw,
    Mailchimp.ListStoreOrdersEcommerceResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListStoreOrdersEcommerceResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListStoreOrdersEcommerceResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListStoreOrdersEcommerceResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
