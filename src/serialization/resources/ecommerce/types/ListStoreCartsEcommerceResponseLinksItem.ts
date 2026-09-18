//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListStoreCartsEcommerceResponseLinksItemMethod } from "./ListStoreCartsEcommerceResponseLinksItemMethod.js";

export const ListStoreCartsEcommerceResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListStoreCartsEcommerceResponseLinksItem.Raw,
    Mailchimp.ListStoreCartsEcommerceResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListStoreCartsEcommerceResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListStoreCartsEcommerceResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListStoreCartsEcommerceResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
