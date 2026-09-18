//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { UnsubscribesLinksItemMethod } from "./UnsubscribesLinksItemMethod.js";

export const UnsubscribesLinksItem: core.serialization.ObjectSchema<
    serializers.UnsubscribesLinksItem.Raw,
    Mailchimp.UnsubscribesLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: UnsubscribesLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace UnsubscribesLinksItem {
    export interface Raw {
        href?: string | null;
        method?: UnsubscribesLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
