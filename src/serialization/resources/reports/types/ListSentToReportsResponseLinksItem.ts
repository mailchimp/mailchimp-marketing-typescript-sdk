//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSentToReportsResponseLinksItemMethod } from "./ListSentToReportsResponseLinksItemMethod.js";

export const ListSentToReportsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListSentToReportsResponseLinksItem.Raw,
    Mailchimp.ListSentToReportsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListSentToReportsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListSentToReportsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListSentToReportsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
