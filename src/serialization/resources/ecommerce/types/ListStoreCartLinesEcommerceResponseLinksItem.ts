//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListStoreCartLinesEcommerceResponseLinksItemMethod } from "./ListStoreCartLinesEcommerceResponseLinksItemMethod.js";

export const ListStoreCartLinesEcommerceResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListStoreCartLinesEcommerceResponseLinksItem.Raw,
    Mailchimp.ListStoreCartLinesEcommerceResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListStoreCartLinesEcommerceResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListStoreCartLinesEcommerceResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListStoreCartLinesEcommerceResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
