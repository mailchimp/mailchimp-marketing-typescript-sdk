//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListStoreOrderLinesEcommerceResponseLinksItemMethod } from "./ListStoreOrderLinesEcommerceResponseLinksItemMethod.js";

export const ListStoreOrderLinesEcommerceResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListStoreOrderLinesEcommerceResponseLinksItem.Raw,
    Mailchimp.ListStoreOrderLinesEcommerceResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListStoreOrderLinesEcommerceResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListStoreOrderLinesEcommerceResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListStoreOrderLinesEcommerceResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
