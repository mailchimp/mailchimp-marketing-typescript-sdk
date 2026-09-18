//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { BatchSubscribeOrUnsubscribeListsResponseLinksItemMethod } from "./BatchSubscribeOrUnsubscribeListsResponseLinksItemMethod.js";

export const BatchSubscribeOrUnsubscribeListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.BatchSubscribeOrUnsubscribeListsResponseLinksItem.Raw,
    Mailchimp.BatchSubscribeOrUnsubscribeListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: BatchSubscribeOrUnsubscribeListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace BatchSubscribeOrUnsubscribeListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: BatchSubscribeOrUnsubscribeListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
