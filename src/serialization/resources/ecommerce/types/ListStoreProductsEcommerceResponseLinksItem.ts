//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListStoreProductsEcommerceResponseLinksItemMethod } from "./ListStoreProductsEcommerceResponseLinksItemMethod.js";

export const ListStoreProductsEcommerceResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListStoreProductsEcommerceResponseLinksItem.Raw,
    Mailchimp.ListStoreProductsEcommerceResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListStoreProductsEcommerceResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListStoreProductsEcommerceResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListStoreProductsEcommerceResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
