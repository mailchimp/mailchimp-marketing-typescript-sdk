//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SentToLinksItemMethod } from "./SentToLinksItemMethod.js";

export const SentToLinksItem: core.serialization.ObjectSchema<
    serializers.SentToLinksItem.Raw,
    Mailchimp.SentToLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: SentToLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace SentToLinksItem {
    export interface Raw {
        href?: string | null;
        method?: SentToLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
