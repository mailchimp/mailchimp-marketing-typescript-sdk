//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ECommercePromoCodeLinksItemMethod } from "./ECommercePromoCodeLinksItemMethod.js";

export const ECommercePromoCodeLinksItem: core.serialization.ObjectSchema<
    serializers.ECommercePromoCodeLinksItem.Raw,
    Mailchimp.ECommercePromoCodeLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ECommercePromoCodeLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ECommercePromoCodeLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ECommercePromoCodeLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
