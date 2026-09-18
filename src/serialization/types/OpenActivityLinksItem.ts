//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { OpenActivityLinksItemMethod } from "./OpenActivityLinksItemMethod.js";

export const OpenActivityLinksItem: core.serialization.ObjectSchema<
    serializers.OpenActivityLinksItem.Raw,
    Mailchimp.OpenActivityLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: OpenActivityLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace OpenActivityLinksItem {
    export interface Raw {
        href?: string | null;
        method?: OpenActivityLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
