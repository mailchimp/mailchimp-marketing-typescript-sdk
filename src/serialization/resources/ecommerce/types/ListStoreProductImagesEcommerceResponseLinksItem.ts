//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListStoreProductImagesEcommerceResponseLinksItemMethod } from "./ListStoreProductImagesEcommerceResponseLinksItemMethod.js";

export const ListStoreProductImagesEcommerceResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListStoreProductImagesEcommerceResponseLinksItem.Raw,
    Mailchimp.ListStoreProductImagesEcommerceResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListStoreProductImagesEcommerceResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListStoreProductImagesEcommerceResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListStoreProductImagesEcommerceResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
