//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { InterestCategoryLinksItemMethod } from "./InterestCategoryLinksItemMethod.js";

export const InterestCategoryLinksItem: core.serialization.ObjectSchema<
    serializers.InterestCategoryLinksItem.Raw,
    Mailchimp.InterestCategoryLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: InterestCategoryLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace InterestCategoryLinksItem {
    export interface Raw {
        href?: string | null;
        method?: InterestCategoryLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
