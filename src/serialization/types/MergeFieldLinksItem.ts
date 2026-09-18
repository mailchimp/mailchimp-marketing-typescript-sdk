//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { MergeFieldLinksItemMethod } from "./MergeFieldLinksItemMethod.js";

export const MergeFieldLinksItem: core.serialization.ObjectSchema<
    serializers.MergeFieldLinksItem.Raw,
    Mailchimp.MergeFieldLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: MergeFieldLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace MergeFieldLinksItem {
    export interface Raw {
        href?: string | null;
        method?: MergeFieldLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
