//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListStoreProductImagesEcommerceResponseImagesItemLinksItemMethod } from "./ListStoreProductImagesEcommerceResponseImagesItemLinksItemMethod.js";

export const ListStoreProductImagesEcommerceResponseImagesItemLinksItem: core.serialization.ObjectSchema<
    serializers.ListStoreProductImagesEcommerceResponseImagesItemLinksItem.Raw,
    Mailchimp.ListStoreProductImagesEcommerceResponseImagesItemLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListStoreProductImagesEcommerceResponseImagesItemLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListStoreProductImagesEcommerceResponseImagesItemLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListStoreProductImagesEcommerceResponseImagesItemLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
