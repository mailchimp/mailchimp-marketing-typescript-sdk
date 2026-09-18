//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommerceProductImagesItemLinksItemMethod } from "./ECommerceProductImagesItemLinksItemMethod.js";

export const ECommerceProductImagesItemLinksItem: core.serialization.ObjectSchema<
    serializers.ECommerceProductImagesItemLinksItem.Raw,
    Mailchimp.ECommerceProductImagesItemLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ECommerceProductImagesItemLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ECommerceProductImagesItemLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ECommerceProductImagesItemLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
