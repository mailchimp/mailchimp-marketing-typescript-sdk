//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { FacebookAdsLinksItemMethod } from "./FacebookAdsLinksItemMethod.js";

export const FacebookAdsLinksItem: core.serialization.ObjectSchema<
    serializers.FacebookAdsLinksItem.Raw,
    Mailchimp.FacebookAdsLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: FacebookAdsLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace FacebookAdsLinksItem {
    export interface Raw {
        href?: string | null;
        method?: FacebookAdsLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
