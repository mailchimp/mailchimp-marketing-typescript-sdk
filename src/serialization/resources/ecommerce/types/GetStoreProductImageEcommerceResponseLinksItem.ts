//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { GetStoreProductImageEcommerceResponseLinksItemMethod } from "./GetStoreProductImageEcommerceResponseLinksItemMethod.js";

export const GetStoreProductImageEcommerceResponseLinksItem: core.serialization.ObjectSchema<
    serializers.GetStoreProductImageEcommerceResponseLinksItem.Raw,
    Mailchimp.GetStoreProductImageEcommerceResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: GetStoreProductImageEcommerceResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace GetStoreProductImageEcommerceResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: GetStoreProductImageEcommerceResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
