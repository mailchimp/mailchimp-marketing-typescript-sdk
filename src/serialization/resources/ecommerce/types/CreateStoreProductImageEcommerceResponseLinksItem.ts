//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateStoreProductImageEcommerceResponseLinksItemMethod } from "./CreateStoreProductImageEcommerceResponseLinksItemMethod.js";

export const CreateStoreProductImageEcommerceResponseLinksItem: core.serialization.ObjectSchema<
    serializers.CreateStoreProductImageEcommerceResponseLinksItem.Raw,
    Mailchimp.CreateStoreProductImageEcommerceResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: CreateStoreProductImageEcommerceResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace CreateStoreProductImageEcommerceResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: CreateStoreProductImageEcommerceResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
