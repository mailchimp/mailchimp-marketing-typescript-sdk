//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListStoresEcommerceResponseLinksItemMethod } from "./ListStoresEcommerceResponseLinksItemMethod.js";

export const ListStoresEcommerceResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListStoresEcommerceResponseLinksItem.Raw,
    Mailchimp.ListStoresEcommerceResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListStoresEcommerceResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListStoresEcommerceResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListStoresEcommerceResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
